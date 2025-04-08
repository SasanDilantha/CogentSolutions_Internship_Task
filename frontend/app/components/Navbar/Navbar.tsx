"use client";
import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconHome, IconListCheck, IconUsers, IconUsersGroup, IconZoomCode } from "@tabler/icons-react";


export function FloatingNavBar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Overview",
      link: "#overview",
      icon: <IconZoomCode className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Our Speakers",
      link: "#speakers",
      icon: <IconUsers className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Agenda",
      link: "#agenda",
      icon: <IconListCheck className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <IconUsersGroup className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    // {
    //   name: "Contact",
    //   link: "#contact",
    //   icon: (
    //     <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
    //   ),
    // },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}