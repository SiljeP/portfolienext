"use client"

import { motion } from "framer-motion"
import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Starsvg } from "./starsvg";
import ShowFactContext from "@/helpers/showfactcontext";



export default function Aboutme() {

    const [showfact, setShowfact] = useContext(ShowFactContext)

    const show = {
        opacity: 1,
        display: "block"
    };

    const hide = {
        opacity: 0,
        transitionEnd: {
            display: "none"
        }
    };
    const [isVisible, setIsVisible] = useState(false);

    return (
        <>
            <div className="w-14 h-14 md:w-24 md:h-24 absolute top-100 left-2 sm:left-40">
                <Starsvg onClick={() => setShowfact(true)} className="fill-white -rotate-12" />
            </div>
            <motion.article
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 }
                }}
                className="text-center mt-4 ">
                <h1 id="about" className=" font-title text-white text-4xl md:text-6xl "><span lang="en">About me</span><span lang="da" aria-hidden="true" >Om Mig</span></h1>
                <p className="text-black font-body text-l md:text-2xl">
                    <span lang="en">Hello world! My name is Silje, and I&apos;m a Danish, 24 year old girl, studying to become a frontend developer. I have an eye for detail, love problemsolving and are able to focus on a project for long periods of time.</span>
                    <span lang="da">Hej verden! Jeg hedder Silje, og jeg er en dansk 24 årig pige, der studerer Webudvikling. Jeg er meget detaljeorienteret, elsker at løse probelmer og har en unik evne til at fokuserer i længere tid af gangen.</span>
                </p>
                <p className="text-black font-body text-l md:text-2xl">
                    <span lang="en">I&apos;m currently on the main course in VET (Vocational education and
                        training) in Web development at <a href="https://www.rts.dk/in-english" target="_blank"> Roskilde Technical College(VET).</a></span>
                    <span lang="da">Lige nu er jeg på hovedforløbet i Webudvikler uddannelsen fra  <a href="https://www.rts.dk/" target="_blank">Roskilde Teknisk Skole</a></span>
                </p>
                <p className="text-black font-body text-l md:text-2xl">
                    <span lang="en">I&apos;m currently looking for an internship in frontend development lasting six weeks (paid by my school - not you!) in the period <span>6. May 2024 to 14. June 2024.</span></span>
                    <span lang="da">Lige nu leder jeg efter en praktikplads indenfor webudvikling(frontendudvikler), som varer 6 uger (ulønnet da jeg får SU!), i perioden <span>6. maj 2024 to 14. juni 2024.</span></span></p>
                <section className="text-center mt-4">
                    <motion.button className="font-bold font-title text-white text-xl md:text-2xl"
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsVisible(!isVisible)}>Personal{isVisible ? <FontAwesomeIcon className="text-s px-3" icon={faArrowDown} /> : <FontAwesomeIcon className="text-s px-3" icon={faArrowRight} />}
                    </motion.button>
                    <motion.p animate={isVisible ? show : hide} id="personal" className="text-black font-body text-l md:text-2xl hidden">
                        I have plenty of hobbies that I love to do when I&apos;m not
                        coding. I enjoy rugtufting slightly ugly rugs, painting slightly ugly pictures, and bookbinding ugly paperbacks to
                        much prettier hardbacks. My dog Bucky is also very happy when I take him on long walks, so I try to do
                        that a lot too. I also enjoy reading, and read about 120 books a year.</motion.p>

                </section>
                <div className="w-14 h-14 md:w-24 md:h-24 absolute top-100 right-20 md:right-40">
                    <Starsvg onClick={() => setShowfact(true)} className="fill-white rotate-12" />
                </div>

            </motion.article>



        </>



    )
}