import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";

type Props = {
  folder: string;
  file: string;
};

export async function getMarkdownContent({ folder, file }: Props) {
  const filePath = path.join(process.cwd(), "contents", folder, `${file}.md`);
  const fileContents = await fs.readFile(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    frontmatter: data,
    content: content,
  };
}
