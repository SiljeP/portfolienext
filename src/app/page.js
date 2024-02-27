"use client"
import About from "@/components/aboutme";
import Contact from "@/components/contact";
import Header from "@/components/header";
import Hero from "@/components/hero";
import LogoCarousel from "@/components/logocarousel";
import Work from "@/components/work";
import Fade from "@/helpers/fade";


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Fade>
        <LogoCarousel />
      </Fade>
      <About />
      <Fade>
        <Work />
      </Fade>
      <Contact />
    </>



  );

}