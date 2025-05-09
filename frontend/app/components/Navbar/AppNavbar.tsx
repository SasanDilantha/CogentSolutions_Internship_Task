"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { Hero } from "../Hero/Hero";
import { About } from "../About/About";
import { Overview } from "../Overview/Overview";
import { Speakers } from "../Speakers/Speakers";
import { Agenda } from "../Agenda/Agenda";
import { Awards } from "../About/Awards";
import { Register } from "../Reg/Register";
import { Footer } from "../Footer/Footer";

export function AppNavbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Overview",
      link: "#overview",
    },
    {
      name: "Our Speakers",
      link: "#speakers",
    },
    {
      name: "Agenda",
      link: "#agenda",
    },
    {
      name: "About",
      link: "#about"
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton variant="primary" href="#reg">Register Now</NavbarButton>
          </div>
        </NavBody>
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Register Now
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      {/* Navbar */}

      <DummyContent />

      
    </>
  );
}


const DummyContent = () => {
  return (
    <div className="container mx-auto p-8 pt-24">
      <Hero />
      <Overview />
      <Speakers />
      <Agenda />
      <About />
      <Awards />
      <Register />
      
    </div>
  );
};
