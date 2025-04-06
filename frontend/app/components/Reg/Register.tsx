"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { RegForm } from "./RegForm";

export function Register() {
    return (
        <section id="reg" className="min-h-[50rem] py-12 md:py-20">
            <AuroraBackground>
                <motion.div
                    initial={{ opacity: 0.0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="relative flex flex-col items-center justify-center px-4 sm:px-6 md:px-8"
                >
                    <div className="w-full max-w-2xl">
                        <RegForm />
                    </div>
                </motion.div>
            </AuroraBackground>
        </section>
    );
}
