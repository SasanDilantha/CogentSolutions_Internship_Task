"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
    setSelectedCard,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
    setSelectedCard: React.Dispatch<React.SetStateAction<any | null>>;
  }) => (
    <div
      onClick={() => setSelectedCard(card)}
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "cursor-pointer rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-80 md:h-[400px] w-full transition-all duration-300 ease-out", // Increased card height here
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <Image
        src={card.src}
        alt={card.title}
        fill
        className="object-cover absolute inset-0"
      />
      <div
        className={cn(
          "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="text-start">
          <div className="text-xl md:text-2xl font-semibold text-white mb-1">
            {card.title}
          </div>
          <div className="text-sm md:text-base text-neutral-200">
            {card.sub}
          </div>
        </div>
      </div>
    </div>
  )
);

Card.displayName = "Card";

type Card = {
  title: string;
  sub: string;
  src: string;
  bio?: string;
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const [selectedCard, setSelectedCard] = useState<any | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-7xl mx-auto md:px-8 w-full mt-8 mb-8">
        {cards.map((card, index) => (
          <Card
            key={card.title}
            card={card}
            index={index}
            hovered={hovered}
            setHovered={setHovered}
            setSelectedCard={setSelectedCard}
          />
        ))}
      </div>

      {selectedCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent">
          <div className="absolute inset-0 bg-opacity-50 backdrop-blur-md"></div>
          <div className="relative bg-neutral-500 bg-opacity-50 max-w-md w-full rounded-xl shadow-lg overflow-hidden">
            <button
              onClick={() => setSelectedCard(null)}
              className="absolute top-3 right-5 text-gray-500 text-3xl"
            >
              &times;
            </button>

            <Image
              src={selectedCard.src}
              alt={selectedCard.title}
              width={600}
              height={400}
              className="w-full object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white mb-2">
                {selectedCard.title}
              </h2>
              <p className="text-sm text-gray-300 mb-4">
                {selectedCard.sub}
              </p>
              <p className="text-base text-gray-300">
               BIO : {selectedCard.bio ||
                  "This is a short bio about the speaker. You can customize this with more detailed info."}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
