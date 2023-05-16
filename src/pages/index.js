import { Inter } from "next/font/google";
import Navbar from "@/components/navigation/Navbar";
import SectionHeroHome from "../components/SectionHeroHome";
import Footer from "@/components/footer/Footer";
import Layout from "@/components/layout/Layout";
import Sidebar from "@/components/navigation/Sidebar";

export default function Home() {
  return (
    <Layout>
      <Sidebar />
    </Layout>
  );
}
