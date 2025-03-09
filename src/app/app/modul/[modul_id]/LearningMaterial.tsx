"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Lock, CheckCircle, Circle } from "lucide-react";
import { useRouter } from "next/navigation";
import { use } from "react";

export default function LearningMaterial() {
  const router = useRouter();
  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Materi Belajar</h2>
      <p className="text-gray-600 mb-4">
        Kamu akan mempelajari berbagai topik pembelajaran seperti berikut ini:
      </p>

      <Accordion type="multiple" className="w-full">
        <AccordionItem value="pre-basic-1">
          <AccordionTrigger className="hover:no-underline">
            Pre Basic 1
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-6 pl-4">
              <div
                onClick={() => router.push("123/123")}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <Checkbox hidden id="part-of-speech" checked disabled />
                  <label
                    htmlFor="part-of-speech"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Part of Speech
                  </label>
                </div>
                <CheckCircle className="h-4 w-4 text-green-500" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Checkbox hidden id="noun" checked disabled />
                  <label
                    htmlFor="noun"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Noun
                  </label>
                </div>
                <CheckCircle className="h-4 w-4 text-green-500" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Checkbox hidden id="pronoun" />
                  <label
                    htmlFor="pronoun"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Pronoun
                  </label>
                </div>
                <Circle className="h-4 w-4 text-gray-500" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Checkbox hidden id="verb" disabled />
                  <label
                    htmlFor="verb"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Verb
                  </label>
                </div>
                <Lock className="h-4 w-4 text-gray-400" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Checkbox hidden id="adverb" disabled />
                  <label
                    htmlFor="adverb"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Adverb
                  </label>
                </div>
                <Lock className="h-4 w-4 text-gray-400" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Checkbox hidden id="adjective" disabled />
                  <label
                    htmlFor="adjective"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Adjective
                  </label>
                </div>
                <Lock className="h-4 w-4 text-gray-400" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Checkbox hidden id="conjunction" disabled />
                  <label
                    htmlFor="conjunction"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Conjunction
                  </label>
                </div>
                <Lock className="h-4 w-4 text-gray-400" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Checkbox hidden id="preposition" disabled />
                  <label
                    htmlFor="preposition"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Preposition
                  </label>
                </div>
                <Lock className="h-4 w-4 text-gray-400" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Checkbox hidden id="interjection" disabled />
                  <label
                    htmlFor="interjection"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Interjection
                  </label>
                </div>
                <Lock className="h-4 w-4 text-gray-400" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Checkbox hidden id="post-test" disabled />
                  <label
                    htmlFor="post-test"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Post Test
                  </label>
                </div>
                <Lock className="h-4 w-4 text-gray-400" />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="pre-basic-2">
          <AccordionTrigger>Pre Basic 2</AccordionTrigger>
          <AccordionContent>Content for Pre Basic 2</AccordionContent>
        </AccordionItem>
        <AccordionItem value="basic-1">
          <AccordionTrigger>Basic 1</AccordionTrigger>
          <AccordionContent>Content for Basic 1</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
