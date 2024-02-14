"use client"
import About from "@/components/aboutme";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Fade from "@/helpers/fade";


export default function Home() {
  return (
   <body className="bg-backgroundLinear bg-no-repeat min-h-screen w-[70%] mx-auto mt-10">
   <Fade>
      <Header/>
    </Fade> 
    <Fade>
      <Hero/>
    </Fade> 
    <Fade>
      <About/>
    </Fade>
   </body>
  
  );

}