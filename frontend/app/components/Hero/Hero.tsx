"use client";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight-new";
import { Typing } from "./TypingText";

export function Hero() {
  return (
    <div className="min-h-[90vh] w-full rounded-md flex flex-col items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden px-4">
      <Spotlight />
      <div className="w-full max-w-7xl mx-auto relative z-10 pt-20 md:pt-0 text-center space-y-6">
        <div className="mx-auto max-w-xs sm:max-w-md md:max-w-lg">
          <Typing />
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 bg-opacity-50">
          FINASTRA
        </h1>
        <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Reimagine Banking: <br className="hidden sm:block" />
          Adapt. Evolve. Thrive.
        </h1>
        <div className="mt-4 font-normal text-sm sm:text-base text-neutral-300 space-y-1">
          <Typing text="Date: 9th April 2025" duration={0.3} />
          <Typing text="Time: 9:30 AM - 2:00 PM GMT+2" />
          <Typing text="The Nile Ritz-Carlton, Cairo, Egypt" />
        </div>
      </div>
    </div>
  );
}
