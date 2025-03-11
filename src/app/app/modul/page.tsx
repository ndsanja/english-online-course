// // src/app/page.tsx (dengan shadcn/ui)

// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import MarkdownRenderer from "@/components/MarkdownRenderer";
// import { getMarkdownContent } from "@/lib/getMarkdownContent";

// export default async function Home() {
//   const { frontmatter, content } = await getMarkdownContent();

//   return (
//     <main className="container mx-auto px-4 py-8">
//       <Card className="max-w-3xl mx-auto">
//         <CardHeader>
//           <CardTitle className="text-4xl">{frontmatter.title}</CardTitle>
//           <p className="text-muted-foreground">
//             {new Date(frontmatter.date).toLocaleDateString()}
//           </p>
//         </CardHeader>
//         <CardContent>
//           <MarkdownRenderer content={content} />
//         </CardContent>
//       </Card>
//     </main>
//   );

// }

import React from "react";

export default function page() {
  return <div>page</div>;
}
