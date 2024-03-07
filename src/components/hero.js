"use client"

import { Starsvg } from "./starsvg"
import { Starsvgleft } from "./starsvgleft"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import ShowFactContext from "@/helpers/showfactcontext";
import useLang from "@/helpers/language";



export default function Hero() {
    const [showfact, setShowfact] = useContext(ShowFactContext)
    var lang = useLang("da")
    return (
        <>
            <article className="h-[700px] sm:h-screen md:h-[500px] relative z-1 ">

                <div className="w-20 h-20 md:w-24 md:h-24 absolute left-0 top-20 sm:left-0 sm:top-0 ">
                    <Starsvg onClick={() => setShowfact(true)} className="fill-white" />

                </div>
                <div className="w-20 h-20 md:w-24 md:h-24 absolute bottom-40 md:bottom-1 right-1 ">
                    <Starsvgleft onClick={() => setShowfact(true)} className="fill-white" />

                </div>

                <motion.div
                    initial={{ x: "200%" }}
                    animate={{ x: "0" }}
                    whileHover={{ scale: 1.1 }}
                    transition={{
                        delay: 7.5,
                        type: "spring",
                        bounce: 0.2,
                    }}

                    className="w-80% sm:w-1/2 text-m sm:text-xl font-title text-center top-40 absolute z-5 right-0 sm:top-10 md:hover:shadow-lg  shadow-lg md:hover:shadow-darkColor shadow-darkColor md:hover:border-3 border-3 md:hover:rounded-lg md:hover:border-darkColor border-darkColor rounded-b-lg p-2"
                >
                    <h2 className="bg-lightColor  font-body text-center shadow-lg shadow-darkColor rounded-md  p-2">{lang.internship_title}</h2>
                    <p className="font-title p-3">{lang.internship_description}</p>
                    <a href="mailto:silje.a.paldrup@gmail.com?body=Our%20company%20is%20very%20interested%20in%20having%20you%20as%20an%20intern!&subject=Internship!" target="_blank"><motion.p whileTap={{ scale: 0.95 }} className="hover:underline ">{lang.internship_link}</motion.p></a>
                </motion.div>
                <motion.div
                    whileTap={{ scale: 0.95 }}
                    className=" absolute top-[30rem] sm:bottom-4 md:bottom-6 left-0 right-0 p-3 text-center mx-auto scroll-smooth">
                    <a href="#about" className="scroll-smooth"><FontAwesomeIcon icon={faAngleDown} className="text-darkColor absolute bottom-4 left-0 right-0 p-3 text-6xl text-center mx-auto" />
                    </a>
                </motion.div>
            </article>
        </>

    )
}