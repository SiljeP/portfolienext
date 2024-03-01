"use client"

import { useContext, useEffect, useState } from "react";
import ShowFactContext from "./showfactcontext";
import { motion } from "framer-motion";

export default function FactStar({ className }) {
    const [showfact, setShowfact] = useContext(ShowFactContext)

    const [data, setData] = useState(null)

    useEffect(function () {

        const FACTS = [
            "On Mercury a day is twice as long as a year",
            "Jupiter’s magnetic field is bigger than the Moon",
            "Black holes have theoretical opposites known as white holes",
            "Neptune has only completed one orbit around the Sun since its discovery",
            "Venus spins backwards",
            "Uranus is the coldest planet in the Solar System",
            "5 billion Suns could fit in UY Scuti, one of the biggest known stars",
        ]
        const randomIndex = Math.floor(Math.random() * FACTS.length);

        setData({
            id: Math.random(),
            text: `${FACTS[randomIndex]}`,
        });
        setTimeout(function () {
            setShowfact(false)
        }, 3000)
    }, [showfact, setShowfact])

    return showfact ? (

        <>
            <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.3 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.4 } }}
                className={className} style={{ backgroundColor: "rgba(255 146 146 / 75%)" }} >

                <h1 className="font-title font-bold text-black">Fun space fact!</h1>
                <p className="font-body text-white p-2">{data?.text}</p>
            </motion.div >


        </>

    ) : null


}