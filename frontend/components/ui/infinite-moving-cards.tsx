import { cn } from "@/lib/utils";
import React from "react";
import { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}: {
    items: {
        name: string;
        image: string;
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);
    const [start, setStart] = useState(false);

    useEffect(() => {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);
            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                scrollerRef.current?.appendChild(duplicatedItem);
            });
            containerRef.current.style.setProperty(
                "--animation-direction",
                direction === "left" ? "forwards" : "reverse",
            );
            containerRef.current.style.setProperty(
                "--animation-duration",
                speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s",
            );
            setStart(true);
        }
    }, []);

    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
                    start && "animate-scroll",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {items.map((item, idx) => (
                    <li
                        key={idx}
                        className="relative w-[250px] max-w-xs shrink-0 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 flex flex-col items-center justify-center text-center px-4 py-6 shadow-sm"
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-20 h-20 object-contain mb-4"
                        />
                        <h1 className="text-base md:text-lg font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                        Company Awards
                        </h1>
                        <span className="text-sm font-medium text-neutral-800 dark:text-gray-100">
                            {item.name}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};
