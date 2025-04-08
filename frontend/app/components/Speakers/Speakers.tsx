import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { SpeakersCard } from "./SpeakersCard";

export function Speakers() {
    return (
        <section id="speakers" >
            <h1 className="text-center text-2xl z-20 md:text-4xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-l from-neutral-50 to-neutral-400 bg-opacity-50">
                Our Speakers
            </h1>

            <BackgroundBeamsWithCollision>
                <SpeakersCard />
            </BackgroundBeamsWithCollision>

        </section>

    );
}

