import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function Agenda() {
  const data = [
    {
      title: "09:30 AM",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-l md:text-lg font-normal mb-8">
            Registration & Welcome Coffee
          </p>
          {/* <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p> */}
        </div>
      ),
    },
    {
      title: "10:00 AM",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-l md:text-lg font-normal mb-8">
            Opening Remarks
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Rudy Kawmi, Managing Director - Middle East, Africa & Asia-Pacific, Finastra Universal Banking
          </p>
        </div>
      ),
    },
    {
      title: "10:10 AM",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-l md:text-lg font-normal mb-8">
            Keynote session: Digital Transformation in a Gen AI World
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Ms. Siobhan Byron, Executive Vice President, Finastra Universal Banking
          </p>
        </div>
      ),
    },
    {
      title: "10:30 AM",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-l md:text-lg font-normal mb-8">
            Decoding the Future - Transformation: The Opportunity & Time is Now
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            TBA
          </p>
        </div>
      ),
    },
    {
      title: "11:00 AM",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-l md:text-lg font-normal mb-8">
            Panel Discussion: Customer Acquisition - Gaining New Customers in a Hyper Competitive World
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Hamid Nirouzad, Managing Director - Africa, Finastra Universal Banking
            Bahaa Farouk, Chief Digital & Data Officer, Suez Canal Bank;
            Ahmad Hamdy, Head of Information Technology, International Company for Leasing S.A.E. “Incolease’’.
          </p>
        </div>
      ),
    },
    {
      title: "11:30 AM",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-l md:text-lg font-normal mb-8">
            Panel Discussion: Customer Retention - Keeping Customers When Loyalty Is Dead
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Karim El Mourabet, Solution Consulting Director - Middle East & Africa, Finastra Universal Banking
            Heba Yehia, Head of Digital Products, Arab African International Bank;
            Ismail Ali, CEO, CariTech
          </p>
        </div>
      ),
    },
    {
      title: "12:00 PM",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-l md:text-lg font-normal mb-8">
            Coffee Break & Networking
          </p>
          {/* <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p> */}
        </div>
      ),
    },
    {
      title: "12:30 PM",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-l md:text-lg font-normal mb-8">
            Panel Discussion: Cost to Serve: Deliver Customer Delight
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Narendra Mistry, Chief Product and Technology Officer, Finastra Universal Banking
            Shehab Moustafa, Country Center of Excellence Director, Money Fellows;
            Matthew Hughes, Global Client Executive Partner, SCB, Atos;
            Emad Shawky Habib Hanna, Chief Data and Analytics Officer, Banque Misr.
          </p>
        </div>
      ),
    },
    {
      title: "01:00 PM",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-l md:text-lg font-normal mb-8">
            The Essential Elements: What do you need to be "all things to all people"?
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Narendra Mistry, Chief Product and Technology Officer, Finastra Universal Banking
          </p>
        </div>
      ),
    },
    {
      title: "01:30 PM",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-l md:text-lg font-normal mb-8">
            Making the case for change: The Question is How
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Marwan Abouzeid, Principal Solutions Consultant & Customer Value Lead, MEA & APAC, Finastra Universal Banking
          </p>
        </div>
      ),
    },
    {
      title: "01:50 PM",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-l md:text-lg font-normal mb-8">
            Closing Remarks
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Rudy Kawmi, Managing Director - Middle East, Africa & Asia-Pacific, Finastra Universal Banking
          </p>
        </div>
      ),
    },
    {
      title: "02:00 PM",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-l md:text-lg font-normal mb-8">
            Lunch
          </p>
          {/* <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p> */}
        </div>
      ),
    },


  ];

  return (
    <section id="#agenda">
      <div className="w-full">
        <Timeline data={data} />
      </div>
    </section>

  );
}
