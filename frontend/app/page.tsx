
import { About } from "./components/About/About";
import { Awards } from "./components/About/Awards";
import { Agenda } from "./components/Agenda/Agenda";
import { Footer } from "./components/Footer/Footer";
import { Hero } from "./components/Hero/Hero";
import HeroNew from "./components/Hero/HeroNew";
import { AppNavbar } from "./components/Navbar/AppNavbar";
import { FloatingNavBar } from "./components/Navbar/Navbar";
import { Overview } from "./components/Overview/Overview";
import { Register } from "./components/Reg/Register";
import { Speakers } from "./components/Speakers/Speakers";

export default function Home() {
  return (
    <>
      <div className="relative w-full">
        {/* <AppNavbar /> */}
        <FloatingNavBar />
        <Hero />
        {/* <HeroNew /> */}
        <Overview />
        <Speakers />
        <Agenda />
        <About />
        <Awards />
        <Register />
        <Footer />
      </div>

    </>
  );
}
