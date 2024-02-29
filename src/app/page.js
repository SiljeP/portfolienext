"use client"
import About from "@/components/aboutme";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import LogoCarousel from "@/components/logocarousel";
import Work from "@/components/work";
import Fade from "@/helpers/fade";


export default function Home() {
  return (
    <>
      <div className="w-[70%] min-h-screen mx-auto mt-10 overflow-x-hidden">
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
    </>



  );

}