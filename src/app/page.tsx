import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-center mb-4 font-bold">
        Kampung Iggris Online Course
      </h1>
      <Button>
        <Link href="/app">Dashboard</Link>
      </Button>
    </div>
  );
}
