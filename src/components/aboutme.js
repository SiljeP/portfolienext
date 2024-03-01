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
                <h1 id="about" className=" font-title text-white text-4xl md:text-6xl ">About me</h1>
                <p className="text-black font-body text-l md:text-2xl">Hello world! My name is Silje, and I&apos;m a Danish, 24 year old girl, studying to become a frontend developer. I have an eye for detail, love problemsolving and are able to focus on a project for long periods of time.</p>
                <p className="text-black font-body text-l md:text-2xl">I&apos;m currently on the main course in VET (Vocational education and
                    training) in Web development at <a href="https://www.rts.dk/in-english"> Roskilde Technical College(VET).</a></p>
                <p className="text-black font-body text-l md:text-2xl">I&apos;m currently looking for an internship in front-end development lasting six weeks (paid by my school - not you!) in the period <span>22. January 2024 to 8.March 2024. </span></p>

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