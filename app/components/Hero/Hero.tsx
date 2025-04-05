"use client";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight-new";
import { Typing } from "./TypingText";

export function Hero() {
    return (
        <div className="h-[90vh] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <Spotlight />
            <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
                {/* <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                    <span className="">Exploding beams.</span>
                </div> */}
                <div className="mx-[16vw]">
                    <Typing />
                </div>
                <h1 className="text-7xl md:text-9xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500  to-purple-500 bg-opacity-50">
                    FINASTRA
                </h1>
                <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    Spotlight <br /> which is not overused.
                </h1>
                <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
                    A subtle yet effective spotlight effect, because the previous version
                    is used a bit too much these days.
                </p>
            </div>
        </div>
    );
}
