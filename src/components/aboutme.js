"use client"

import { motion } from "framer-motion"
import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Starsvg } from "./starsvg";
import ShowFactContext from "@/helpers/showfactcontext";
import useLang from "@/helpers/language";



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

    var { lang } = useLang("en")

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
                <h1 id="about" className=" font-title text-white text-4xl md:text-6xl ">
                    {lang.menu_about}

                </h1>
                <p className="text-black font-body text-l md:text-2xl">
                    {lang.about_first}

                </p>
                <p className="text-black font-body text-l md:text-2xl" dangerouslySetInnerHTML={{ __html: lang.about_second }}>


                </p>
                <p className="text-black font-body text-l md:text-2xl">
                    {lang.about_third}</p>
                <section className="text-center mt-4">
                    <motion.button className="font-bold font-title text-white text-xl md:text-2xl"
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsVisible(!isVisible)}>{lang.about_personal_title}{isVisible ? <FontAwesomeIcon className="text-s px-3" icon={faArrowDown} /> : <FontAwesomeIcon className="text-s px-3" icon={faArrowRight} />}
                    </motion.button>
                    <motion.p animate={isVisible ? show : hide} id="personal" className="text-black font-body text-l md:text-2xl hidden">
                        {lang.about_personal}</motion.p>

                </section>
                <div className="w-14 h-14 md:w-24 md:h-24 absolute top-100 right-20 md:right-40">
                    <Starsvg onClick={() => setShowfact(true)} className="fill-white rotate-12" />
                </div>

            </motion.article>



        </>



    )
}