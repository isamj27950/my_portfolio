import { Inter } from "next/font/google";
import Navbar from "@/components/navigation/Navbar";
import SectionHeroHome from "./SectionHeroHome";
import Footer from "@/components/footer/Footer"

export default function Home() {
  return (
    <div>

      <SectionHeroHome />
      <div>
      
        <Navbar />
      </div>
      <Footer/>
    </div>
  );
}
