"use client";

import React from "react";
import { motion } from "framer-motion";

interface CardProps {
  title: string;
  description: string;
}

interface HoverEffectProps {
  items: CardProps[];
}

export const HoverEffect: React.FC<HoverEffectProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl hover:scale-[1.03] transition-transform duration-300 ease-in-out"
          whileHover={{ y: -4 }}
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            {item.title}
          </h3>
          <p className="text-gray-600 text-sm">{item.description}</p>
        </motion.div>
      ))}
    </div>
  );
};
