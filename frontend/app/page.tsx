import { Footer } from "./components/Footer/Footer";
import { AppNavbar } from "./components/Navbar/AppNavbar";


export default function Home() {
  return (
    <>
      <div className="relative w-full">
        <AppNavbar />
        <Footer />
      </div>

    </>
  );
}
