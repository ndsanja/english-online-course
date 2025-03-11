"use client";

import { useState } from "react";
import { updateMarkdownToGitHub } from "@/lib/github";

export default function EditForm({
  initialContent,
  sha,
  slug,
}: {
  initialContent: string;
  sha: string;
  slug: string;
}) {
  const [content, setContent] = useState(initialContent);

  const handleSubmit = async () => {
    await updateMarkdownToGitHub(
      "ndsanja",
      "english-online-course",
      `content/${slug}.md`,
      content,
      sha
    );
    alert("Content updated!");
  };

  return (
    <div>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full h-64 border p-2"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 mt-2"
      >
        Save to GitHub
      </button>
    </div>
  );
}
