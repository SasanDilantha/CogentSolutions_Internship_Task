"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

interface TypingProps {
  text?: string;
  duration?: number;
}

export function Typing({
  text = "Organized By",
  duration = 0.8,
}: TypingProps) {
  return <TextGenerateEffect words={text} duration={duration} />;
}
