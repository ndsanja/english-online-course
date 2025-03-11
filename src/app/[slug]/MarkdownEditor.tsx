"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { updateMarkdownToGitHub } from "@/lib/github";
import matter from "gray-matter";

interface MarkdownEditorProps {
  initialContent: string;
  sha: string;
  slug: string;
}

export default function MarkdownEditor({
  initialContent,
  sha: initialSha,
  slug,
}: MarkdownEditorProps) {
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { data: frontmatter, content: markdownContent } =
    matter(initialContent);

  const editor = useEditor({
    extensions: [StarterKit, Link.configure({ openOnClick: false }), Image],
    content: markdownContent,
    editorProps: {
      attributes: {
        class:
          "prose max-w-none p-4 border rounded min-h-[300px] focus:outline-none",
      },
    },
  });

  const convertToMarkdown = () => {
    if (!editor) return "";
    const html = editor.getHTML();
    let markdown = html
      .replace(/<h1>(.*?)<\/h1>/g, "# $1\n")
      .replace(/<p>(.*?)<\/p>/g, "$1\n")
      .replace(/<strong>(.*?)<\/strong>/g, "**$1**");
    return markdown;
  };

  const handleSave = async () => {
    if (!editor) return;
    setIsSaving(true);
    setError(null);

    const markdown = convertToMarkdown();
    const updatedContent = matter.stringify(markdown, frontmatter);
    const path = `content/${slug}.md`;

    try {
      await updateMarkdownToGitHub(
        "ndsanja",
        "english-online-course", // Pastikan ini benar, bukan 'english-online-course-content'
        path,
        updatedContent
      );
      alert("Content saved successfully!");
      window.location.reload();
    } catch (error: any) {
      setError(error.message);
      console.error("Save error:", error);
    } finally {
      setIsSaving(false);
    }
  };

  const Toolbar = () => (
    <div className="flex gap-2 mb-4 flex-wrap">
      <Button
        variant="outline"
        size="sm"
        onClick={() => editor?.chain().focus().toggleBold().run()}
      >
        Bold
      </Button>
    </div>
  );

  if (!editor) return null;

  return (
    <div className="mt-8">
      <Toolbar />
      <EditorContent editor={editor} />
      {error && <p className="text-red-500 mt-2">{error}</p>}
      <Button
        onClick={handleSave}
        disabled={isSaving}
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white"
      >
        {isSaving ? "Saving..." : "Save to GitHub"}
      </Button>
    </div>
  );
}
