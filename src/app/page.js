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
      <FactStar className="text-center fixed top-2 right-2  p-2  rounded-lg h-fit sm:w-[90px] md:w-[200px] lg:w-[300px]" />
    </ShowFactContext.Provider>




  );

}