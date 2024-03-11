"use client"

import { useContext, useEffect, useState } from "react";
import ShowFactContext from "./showfactcontext";
import { motion, AnimatePresence } from "framer-motion";
import useLang from "./language";

export default function FactStar({ className }) {
    const [showfact, setShowfact] = useContext(ShowFactContext)

    const [data, setData] = useState(null)

    var { lang } = useLang("en")

    useEffect(function () {

        const FACTS = [
            lang.fact_one,
            lang.fact_two,
            lang.fact_three,
            lang.fact_four,
            lang.fact_five,
            lang.fact_six,
            lang.fact_seven
        ]

        const randomIndex = Math.floor(Math.random() * FACTS.length);

        setData({
            id: Math.random(),
            text: `${FACTS[randomIndex]}`,
        });
        const TIMEOUT = setTimeout(function () {
            setShowfact(false)
        }, 5000)

        return function () {
            clearTimeout(TIMEOUT)
        }

    }, [showfact, setShowfact])

    return (

        <>
            <AnimatePresence>
                {showfact && (

                    <motion.div
                        key="modal"
                        initial={{ opacity: 0, y: 50, scale: 0.3 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 200, scale: 0.5, transition: { duration: 0.3 } }}
                        className={className}  >
                        {/* style={{ backgroundColor: "rgba(255 146 146 / 75%)" }} */}
                        <h1 className="font-title font-bold text-white text-m sm:text-l md:text-xl">{lang.fact_title}</h1>
                        <p className="font-body text-s sm:text-m md:text-l text-white p-2">{data?.text}</p>
                    </motion.div >


                )}

            </AnimatePresence>
        </>

    )


}
