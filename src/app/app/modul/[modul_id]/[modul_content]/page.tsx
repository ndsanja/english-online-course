import React from "react";
import ModulContent from "./ModulContent";
import { getMarkdownContent } from "@/lib/getMarkdownContent";
import { log } from "console";

export default async function page({
  params,
}: {
  params: Promise<{ modul_content: string }>;
}) {
  const { modul_content: slug } = await params;
  log(slug);
  const { frontmatter, content } = await getMarkdownContent({
    folder: slug?.split("-")[0],
    file: slug?.split("-")[1],
  });

  return (
    <div>
      <ModulContent content={content} />
    </div>
  );
}
