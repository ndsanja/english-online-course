import { getMarkdownFromGitHub } from "@/lib/github";
import matter from "gray-matter";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import EditForm from "./EditForm";
import MarkdownEditor from "./MarkdownEditor";

interface PageParams {
  params: {
    slug: string;
  };
}

export const revalidate = 60; // ISR: Revalidate setiap 60 detik

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const path = `content/${slug}.md`;
  const { content, sha } = await getMarkdownFromGitHub(
    "ndsanja",
    "english-online-course", // Pastikan ini benar
    path
  );
  const { data: frontmatter, content: markdownContent } = matter(content);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{frontmatter.title || slug}</h1>
      <MarkdownRenderer content={markdownContent} />
      <h1>{sha}</h1>

      <MarkdownEditor initialContent={content} sha={sha} slug={slug} />
    </div>
  );
}
