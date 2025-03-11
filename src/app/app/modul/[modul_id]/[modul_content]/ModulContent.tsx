"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Search, MoreVertical } from "lucide-react";
import { useRouter } from "next/navigation";
import SheetList from "./SheetList";
import MarkdownRenderer from "@/components/MarkdownRenderer";

type Props = {
  content: any;
};
export default function ModulContent({ content }: Props) {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 flex items-center justify-between p-4 bg-white border-b border-gray-200">
        {/* Back Arrow */}
        <Button onClick={() => router.back()} variant="ghost" size="icon">
          <ArrowLeft className="h-5 w-5 text-gray-600" />
        </Button>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5 text-gray-600" />
          </Button>
          <Button variant="ghost" size="icon">
            <SheetList />
          </Button>
          <Button variant="ghost" size="icon">
            <MoreVertical className="h-5 w-5 text-gray-600" />
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="p-4 pb-[100px] max-w-2xl mx-auto">
        {/* Content */}
        <div className="space-y-4 text-gray-700">
          <MarkdownRenderer content={content} />
        </div>

        {/* Navigation Buttons */}
        <div className="z-50 bg-white fixed bottom-0 right-0 left-0  h-[60px] border-t">
          <div className="flex justify-between items-center px-2 h-full">
            <Button variant="outline" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <span className="text-sm font-medium">Forum Diskusi</span>
            <Button variant="outline" size="icon">
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
