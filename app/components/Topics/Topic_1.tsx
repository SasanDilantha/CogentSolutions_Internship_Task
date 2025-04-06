"use client";
import React, { useEffect, useState } from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { Meteors } from "@/components/ui/meteors";

interface OverviewSectionProps {
  topic?: string;
  paragraphs?: string[];
}

export function Topic_1({
  topic = "Event Overview",
}: OverviewSectionProps) {

  return (
    <div className="min-h-[50rem] w-full bg-black flex flex-col items-center justify-start overflow-hidden rounded-md p-4 pt-10">
      {/* Topic Title (Static) */}
      <h1 className="md:text-6xl text-3xl lg:text-8xl font-bold text-center text-white relative z-20 mb-4">
        {topic}
      </h1>

      {/* Sparkles Effect */}
      <div className="w-[40rem] h-40 relative mb-10">
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]" />
      </div>

      <div className="relative w-350">
        <div className="relative w-full">
          <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-red-500 bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />
          <div className="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-4 py-8 shadow-xl">

          <p className=" mb-4 text-xl md:text-2xl font-mono text-center bg-clip-text text-transparent bg-gradient-to-l from-neutral-50 to-neutral-400 bg-opacity-50">
              Join us on April 9th in Cairo, Egypt, for Finastra's Universal Banking Forum, "Reimagine Banking:
              Adapt. Evolve. Thrive."This exclusive event is designed to help you navigate and excel in the rapidly evolving banking landscape.
            </p>
            <p className="mb-4 text-xl md:text-2xl font-mono text-center bg-clip-text text-transparent bg-gradient-to-l from-neutral-50 to-neutral-400 bg-opacity-50">
              Join us on April 9th in Cairo, Egypt, for Finastra's Universal Banking Forum, "Reimagine Banking:
              Adapt. Evolve. Thrive."This exclusive event is designed to help you navigate and excel in the rapidly evolving banking landscape.
            </p>
            <p className="mb-4 text-xl md:text-2xl font-mono text-center bg-clip-text text-transparent bg-gradient-to-l from-neutral-50 to-neutral-400 bg-opacity-50">
              Join us on April 9th in Cairo, Egypt, for Finastra's Universal Banking Forum, "Reimagine Banking:
              Adapt. Evolve. Thrive."This exclusive event is designed to help you navigate and excel in the rapidly evolving banking landscape.
            </p>

            {/* Meaty part - Meteor effect */}
            <Meteors number={20} />
          </div>
        </div>
      </div>

    </div>
  );
}
