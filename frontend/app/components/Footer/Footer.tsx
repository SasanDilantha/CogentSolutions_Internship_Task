"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import {
  MapPin,
  Building,
  Phone,
  Mail,
} from "lucide-react";
import { SocialMediaBar } from "./SocialMediaBar";

export function Footer() {
  return (
    <div className="relative w-full bg-neutral-950 text-white overflow-hidden">
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 p-6 md:p-12 max-w-7xl mx-auto">
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-bold mb-4">
            Cogent Solutions™
          </h1>
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
            Through our conferences we transform your business challenges into
            opportunities. Our clients and customers are leading government
            entities and the Fortune 500 companies.
          </p>
        </div>
        <div>
          <h1 className="text-3xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-bold mb-4">
            Our Office
          </h1>
          <ul className="space-y-4 text-neutral-400 text-sm md:text-base">
            <li className="flex items-start gap-3">
              <Building className="min-w-[20px] mt-1" />
              <span>
                Middle East & Africa HQ<br />
                Office No: 209, The Metropolis Tower,<br />
                Business Bay, Dubai, United Arab Emirates
              </span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="min-w-[20px] mt-1" />
              <span>
                Asia Pacific Office<br />
                Colombo, Sri Lanka
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="min-w-[20px] mt-1" />
              <span>+971 50 5718867</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="min-w-[20px] mt-1" />
              <span>partnerships@cogentsolutions.ae</span>
            </li>
          </ul>
        </div>
      </div>

      <hr className="border-neutral-800" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-6 md:py-10 grid grid-cols-1 md:grid-cols-2 items-center">
        <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
          © 2025 Cogent Solutions Event Management LLC. All Right Reserved
        </p>
        <div className="flex justify-end mt-6 md:mt-0">
          <SocialMediaBar />
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
