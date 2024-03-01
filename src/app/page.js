"use client"
import About from "@/components/aboutme";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import LogoCarousel from "@/components/logocarousel";
import Work from "@/components/work";
import FactStar from "@/helpers/facts";
import Fade from "@/helpers/fade";
import ShowFactContext from "@/helpers/showfactcontext";
import { useState } from "react";

export default function Home() {
  const showFactState = useState(false)

  return (
    <ShowFactContext.Provider value={showFactState}>
      <div className="w-[70%] mx-auto mt-10 overflow-x-hidden">
        <Header />
        <Hero />
        <Fade>
          <LogoCarousel />
        </Fade>
        <About />
        <Work />
        <Contact />
      </div>
      <Footer />
      <FactStar className="z-[3000] text-center fixed top-2 right-2  p-2  rounded-lg h-fit sm:w-[90px] md:w-[200px] lg:w-[300px] text-white bg-gradient-to-r from-pink-400/75 via-pink-500/75 to-pink-600/75 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300/75 dark:focus:ring-pink-800/75 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium  text-sm px-5 py-2.5 me-2 mb-2" />
    </ShowFactContext.Provider>


  );

}