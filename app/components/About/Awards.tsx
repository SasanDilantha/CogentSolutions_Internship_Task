"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function Awards() {
    return (
        <section>
            <div className="h-auto w-full rounded-md flex flex-col items-center justify-center antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] relative overflow-hidden px-4">
                <InfiniteMovingCards
                    items={awards}
                    direction="right"
                    speed="fast"
                />
            </div>
        </section>

    );
}

const awards = [
    {
        name: "Best Innovator",
        image: "/img/aw1.png",
    },
    {
        title: "",
        name: "Top Performer",
        image: "/img/aw2.png",
    },
    {
        name: "Leadership Excellence",
        image: "/img/aw3.png",
    },
    {
        name: "Team Player",
        image: "/img/aw4.png",
    },
];
