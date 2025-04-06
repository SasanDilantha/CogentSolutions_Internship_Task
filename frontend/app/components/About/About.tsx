"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";

export function About() {
    return (
        <section id="about">
            <div className="min-h-[35rem] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
                <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

                <Boxes />
                <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
                    About Finastra
                </h1>
                <p className="text-center mt-2 text-neutral-300 relative z-20 w-[60%]">
                    Finastra is a global provider of financial services software applications across Lending, Payments,
                    Treasury and Capital Markets, and Universal (retail and digital) Banking. Committed to unlocking
                    the potential of people, businesses and communities everywhere, its vision is to accelerate
                    the future of Open Finance through technology and collaboration, and its pioneering
                    approach is why it is trusted by ~8,100 financial institutions, including 45 of the world's top 50 banks.
                    <br /> <br />
                    For more information, visit www.finastra.com.
                </p>
            </div>
        </section>

    );
}
