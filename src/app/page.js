"use client"
import About from "@/components/aboutme";
import Header from "@/components/header";
import Hero from "@/components/hero";
import LogoCarousel from "@/components/logocarousel";
import Work from "@/components/work";
import Fade from "@/helpers/fade";


export default function Home() {
  return (
    <body className="bg-backgroundLinear bg-no-repeat min-h-screen w-[70%] mx-auto mt-10 overflow-x-hidden">
      <Header />
      <Hero />
      <Fade>
        <LogoCarousel />
      </Fade>
      <About />
      <Fade>
        <Work />
      </Fade>
    </body>

  );

}