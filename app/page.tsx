
import { Hero } from "./components/Hero/Hero";
import { AppNavbar } from "./components/Navbar/AppNavbar";
import { FloatingNavBar } from "./components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <div className="relative w-full">
        <AppNavbar />
        {/* <FloatingNavBar /> */}
        <Hero />
      </div>

    </>
  );
}
