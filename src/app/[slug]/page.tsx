import { getMarkdownFromGitHub } from "@/lib/github";
import matter from "gray-matter";
import MarkdownRenderer from "@/components/MarkdownRenderer";

interface PageParams {
  params: {
    slug: string;
  };
}

export const revalidate = 60; // ISR: Revalidate setiap 60 detik

export default async function Page({ params }: PageParams) {
  const { slug } = params;

  // Ambil konten dari GitHub
  const { content } = await getMarkdownFromGitHub(
    "ndsanja", // Ganti dengan username GitHub Anda
    "ndsanja/english-online-course", // Ganti dengan nama repository
    `contents/${slug}.md` // Path ke file Markdown
  );

  // Parse frontmatter dan konten
  const { data: frontmatter, content: markdownContent } = matter(content);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{frontmatter.title || slug}</h1>
      <MarkdownRenderer content={markdownContent} />
    </div>
  );
}
