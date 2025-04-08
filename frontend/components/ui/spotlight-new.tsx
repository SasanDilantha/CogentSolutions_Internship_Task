"use client";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

type SpotlightProps = {
  gradientFirst?: string;
  gradientSecond?: string;
  gradientThird?: string;
  translateY?: number;
  width?: number;
  height?: number;
  smallWidth?: number;
  duration?: number;
  xOffset?: number;
};

export const Spotlight = ({
  gradientFirst = "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(210, 100%, 95%, .25) 0, hsla(210, 100%, 85%, .1) 50%, hsla(210, 100%, 75%, 0) 80%)",
  gradientSecond = "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 95%, .15) 0, hsla(210, 100%, 85%, .05) 80%, transparent 100%)",
  gradientThird = "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 90%, .1) 0, hsla(210, 100%, 80%, .05) 80%, transparent 100%)",
  translateY = -350,
  width = 70,
  smallWidth = 30, 
  height = 180, 
  duration = 7,
  xOffset = 100,
}: SpotlightProps = {}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Adjust values for mobile
  const adjustedTranslateY = isMobile ? -250 : translateY;
  const adjustedDuration = isMobile ? duration + 2 : duration;
  const adjustedXOffset = isMobile ? xOffset / 2 : xOffset;

  // Responsive width and height using clamp
  const responsiveWidth = `clamp(200px, ${width}vw, 560px)`;
  const responsiveSmallWidth = `clamp(100px, ${smallWidth}vw, 240px)`;
  const responsiveHeight = `clamp(100vh, ${height}vh, 1380px)`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden"
    >
      {/* Left Moving Beam */}
      <motion.div
        animate={{ x: [0, adjustedXOffset, 0] }}
        transition={{
          duration: adjustedDuration,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute top-0 left-0 w-screen h-screen z-40 pointer-events-none"
      >
        <div
          style={{
            transform: `translateY(${adjustedTranslateY}px) rotate(-45deg)`,
            background: gradientFirst,
            width: responsiveWidth,
            height: responsiveHeight,
          }}
          className="absolute top-0 left-0"
        />
        <div
          style={{
            transform: "rotate(-45deg) translate(5%, -50%)",
            background: gradientSecond,
            width: responsiveSmallWidth,
            height: responsiveHeight,
          }}
          className="absolute top-0 left-0 origin-top-left"
        />
        <div
          style={{
            transform: "rotate(-45deg) translate(-180%, -70%)",
            background: gradientThird,
            width: responsiveSmallWidth,
            height: responsiveHeight,
          }}
          className="absolute top-0 left-0 origin-top-left"
        />
      </motion.div>

      {/* Right Moving Beam */}
      <motion.div
        animate={{ x: [0, -adjustedXOffset, 0] }}
        transition={{
          duration: adjustedDuration,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute top-0 right-0 w-screen h-screen z-40 pointer-events-none"
      >
        <div
          style={{
            transform: `translateY(${adjustedTranslateY}px) rotate(45deg)`,
            background: gradientFirst,
            width: responsiveWidth,
            height: responsiveHeight,
          }}
          className="absolute top-0 right-0"
        />
        <div
          style={{
            transform: "rotate(45deg) translate(-5%, -50%)",
            background: gradientSecond,
            width: responsiveSmallWidth,
            height: responsiveHeight,
          }}
          className="absolute top-0 right-0 origin-top-right"
        />
        <div
          style={{
            transform: "rotate(45deg) translate(180%, -70%)",
            background: gradientThird,
            width: responsiveSmallWidth,
            height: responsiveHeight,
          }}
          className="absolute top-0 right-0 origin-top-right"
        />
      </motion.div>
    </motion.div>
  );
};
