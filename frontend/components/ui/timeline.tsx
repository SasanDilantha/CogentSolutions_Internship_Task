"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 40%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h1 className="text-center text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-l from-neutral-50 to-neutral-400">
          Agenda
        </h1>
      </div>

      <div ref={ref} className="relative max-w-6xl mx-auto pb-20">
        {data.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row md:items-start gap-4 py-10 ${
                isLeft ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Time Bubble */}
              <div className="relative flex-shrink-0 w-36 md:w-48 flex justify-center md:justify-end md:pr-4 md:pl-4">
                <div className="bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 px-4 py-2 rounded-full text-sm md:text-base shadow">
                  {item.title}
                </div>
              </div>

              {/* Content Card */}
              <div
                className={`relative w-full md:max-w-[50%] bg-white dark:bg-neutral-900 shadow-lg border border-neutral-100 dark:border-neutral-800 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl`}
              >
                {item.content}
              </div>
            </div>
          );
        })}

        {/* Timeline Line – visible on both mobile and desktop */}
        <div
          style={{ height: `${height}px` }}
          className="absolute top-0 left-[33px] md:left-1/2 -translate-x-0 md:-translate-x-1 w-[2px] bg-gradient-to-b from-transparent via-neutral-300 dark:via-neutral-700 to-transparent"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute top-0 w-full bg-gradient-to-t from-purple-500 via-blue-500 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
