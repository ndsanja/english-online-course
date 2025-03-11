//@ts-nocheck
// src/components/MarkdownRenderer.tsx
"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { ComponentProps } from "react";

interface MarkdownRendererProps {
  content: string;
}

// Komponen kustom untuk styling markdown
const components: ComponentProps<typeof ReactMarkdown>["components"] = {
  h1: ({ node, ...props }) => (
    <h1 className="text-3xl font-bold mt-8 mb-4 text-gray-900" {...props} />
  ),
  h2: ({ node, ...props }) => (
    <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800" {...props} />
  ),
  h3: ({ node, ...props }) => (
    <h3 className="text-xl font-medium mt-4 mb-2 text-gray-700" {...props} />
  ),
  p: ({ node, ...props }) => (
    <p className="text-gray-600 leading-relaxed my-4" {...props} />
  ),
  ul: ({ node, ...props }) => (
    <ul className="list-disc list-inside my-4 text-gray-600" {...props} />
  ),
  ol: ({ node, ...props }) => (
    <ol className="list-decimal list-inside my-4 text-gray-600" {...props} />
  ),
  li: ({ node, ...props }) => <li className="my-2" {...props} />,
  code: ({ node, inline, ...props }) =>
    inline ? (
      <code
        className="bg-gray-100 rounded px-1 py-0.5 text-sm text-gray-800"
        {...props}
      />
    ) : (
      <pre className="bg-gray-100 rounded p-4 my-4 overflow-x-auto">
        <code className="text-sm text-gray-800" {...props} />
      </pre>
    ),
  a: ({ node, ...props }) => (
    <a className="text-blue-600 hover:underline" {...props} />
  ),
  blockquote: ({ node, ...props }) => (
    <blockquote
      className="border-l-4 border-gray-200 pl-4 my-4 italic text-gray-600"
      {...props}
    />
  ),
};

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="prose max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={components}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
