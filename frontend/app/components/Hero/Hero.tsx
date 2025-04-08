"use client";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight-new";
import { Typing } from "./TypingText";
import Image from "next/image";
import Link from "next/dist/client/link";
import { CalendarDays, Clock, MapPin } from "lucide-react";


export function Hero() {
  return (
    <div
      className="h-screen w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden px-4"
      style={{
        backgroundImage: "url('/img/bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/[0.88] backdrop-blur-sm z-0" />
      <Spotlight />

      <div className="absolute top-10 left-10 z-20">
        <Link href="https://cogentsolutions.ae/">
          <Image
            src="/img/logo.jpg"
            alt="Logo Mobile"
            width={40}
            height={40}
            className="block md:hidden"

          />
        </Link>
        <Link href="https://cogentsolutions.ae/">
          <Image
            src="/img/cogent-logo-01.png"
            alt="Logo Desktop"
            width={100}
            height={100}
            className="hidden md:block"
          />
        </Link>
      </div>

      <div className="w-full max-w-7xl mx-auto relative z-10 pt-20 md:pt-0 text-center space-y-6">
        <div className="mx-auto max-w-xs sm:max-w-md md:max-w-lg">
          <Typing />
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r  from-neutral-50 to-gray-400 bg-opacity-50">
          FINASTRA
        </h1>

        <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Reimagine Banking: <br className="hidden sm:block" />
          Adapt. Evolve. Thrive.
        </h1>

        <div className="mt-8 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl px-6 py-4 max-w-md mx-auto shadow-lg space-y-3">
          <div className="flex items-center gap-3 text-neutral-200 text-sm sm:text-base">
            <CalendarDays className="w-5 h-5 text-pink-400" />
            <span>Date: 9th April 2025</span>
          </div>

          <div className="flex items-center gap-3 text-neutral-200 text-sm sm:text-base">
            <Clock className="w-5 h-5 text-purple-400" />
            <span>Time: 9:30 AM - 2:00 PM GMT+2</span>
          </div>

          <div className="flex items-center gap-3 text-neutral-200 text-sm sm:text-base">
            <MapPin className="w-5 h-5 text-blue-400" />
            <span>The Nile Ritz-Carlton, Cairo, Egypt</span>
          </div>
        </div>

        <div className="mt-8">
          <button className="px-6 py-3 bg-black/30 backdrop-blur-md border border-white/20 text-white font-semibold rounded-xl shadow-lg hover:bg-white/10 hover:shadow-xl transition duration-300">
            Register Now
          </button>
        </div>

      </div>
    </div>
  );
}
