
import { About } from "./components/About/About";
import { Agenda } from "./components/Agenda/Agenda";
import { Footer } from "./components/Footer/Footer";
import { Hero } from "./components/Hero/Hero";
import { AppNavbar } from "./components/Navbar/AppNavbar";
import { FloatingNavBar } from "./components/Navbar/Navbar";
import { Overview } from "./components/Overview/Overview";
import { Speakers } from "./components/Speakers/Speakers";

export default function Home() {
  return (
    <>
      <div className="relative w-full">
        <AppNavbar />
        {/* <FloatingNavBar />
        <Hero />
        <Overview />
        <Speakers />
        <Agenda />
        <About /> */}
        
      </div>

    </>
  );
}
