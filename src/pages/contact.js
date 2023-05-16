import React from "react";
import SectionHeroHome from "../components/SectionHeroHome";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";
import Form from "@/components/form/Form";
import Layout from "@/components/layout/Layout";
import Sidebar from "@/components/navigation/Sidebar";
import CardsIconHero from "@/components/cards/CardsIconHero";
import CardContact from "@/components/cards/CardContact";

export default function contact() {
  return (
    <Layout>
      <div className="containera">
        <Sidebar />
        <div className="block   justify-items-center gap-4 xl:flex xl:ml-20 w-full">
          <div className=" mb-4 drop-shadow-2xl rounded-2xl xl:w-1/2 xl:h-full">
            <CardContact />
          </div>
          <div className="drop-shadow-2xl rounded-2xl xl:w-1/2 xl:h-full  md:mt-4">
            <Form
            className="w-full"/>
          </div>
        </div>
      </div>
    </Layout>
  );
}
