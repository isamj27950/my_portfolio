import React from "react";
import { BiCheck } from "react-icons/bi";
import SectionHeroHome from "../components/SectionHeroHome";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";
import CardAboutMe from "@/components/cards/CardAboutMe";
import Sidebar from "@/components/navigation/Sidebar";
import CardAboutClients from "@/components/cards/CardAboutClients";

export default function about() {
  return (
    <div>
      <SectionHeroHome />
      <Navbar />
      <div className="containera ">
        <div className="">
          <Sidebar />
        </div>
        {/**partie haute avec l'image */}
        <div className="bg-gray-800 py-4  drop-shadow-xl rounded-xl xl:ml-20 ">
          <div className="bg-gray-800 px-5 xl:flex xl:pb-10 ">
            <img
              src="images/img_bureau.jpeg"
              className="bg-cover w-[80%] mx-auto h-25 m-2  xl:w-2/5 px-4 "
              alt=""
            />
            <div className="xl:block">
              <h3 className="text-[#f9004d] text-sm uppercase pt-8">
                Visit my portfolio & hire me
              </h3>
              <h2 className="text-[#c4cfde] text-center font-bold uppercase text-xl py-4 md:text-start">
                About Me
              </h2>
              <p className="text-[#878e99] text-center py-4 md:text-start">
                En reconversion professionnelle dans le domaine du développement
                web, mes expériences passées m'ont permis d'acquérir de
                nombreuses compétences. Plus de 20 ans d'expérience en tant que
                coach sportif et responsable de salle de sport m'ont appris le
                travail en équipe, le sens du contact avec les clients. Cela m'a
                permis d'acquérir un sens de la pédagogie ,de la transmission et
                de l'écoute. J'ai commencé en septembre 2022 par une formation
                sur Paris de développeur full-stack, ensuite j'ai pratiqué
                quelques mois entreprise.Et depuis décembre 2022 je suis une
                nouvelle formation de développeuse intégratrice de systèmes
                intranet internet .
              </p>
              {/**Les checks */}
              <div className="py-4 md:text-start">
                <p className="flex text-[#878e99]">
                  <BiCheck />
                  Web Designer
                </p>
                <p className="flex text-[#878e99]">
                  <BiCheck />
                  Dévellopeuse Front-End
                </p>
                <p className="flex text-[#878e99]">
                  <BiCheck />
                  Dévellopeuse de solutions
                </p>
              </div>
              <div className="p-4 m-2 drop-shadow-xl md:text-start">
                <button className="btn text-[#ff014f] border-none  text-center  bg-gray-800 m-auto pb-2">
                  Download my CV
                </button>
              </div>
            </div>
          </div>

          <div className="">
            {/**Partie centrale avec les 2 cards */}
            <h2 className="text-[#c4cfde] text-center font-bold text-xl">
              What I am Doing
            </h2>
            <div className="drop-shadow-xl ">
              <CardAboutMe />
            </div>
          </div>
          {/** Partie basse clients*/}
          <h2 className="text-[#c4cfde] text-center font-bold text-xl">
            Our trusted Clients
          </h2>
          <div className="">
            <CardAboutClients />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
