"use client"

import { useEffect, useState } from "react";

export default function FactStar({ showfact, setShowfact }) {

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

    return (

        <>
            <div style={{ backgroundColor: "rgba(255 146 146 / 65%)" }} className="text-center relative top-1 p-2 left-5 h-[50%] w-min sm:h-fit sm:w-min md:h-min  border-2 rounded-lg">
                <h1 className="font-title font-bold text-black">Fun space fact!</h1>
                <p className="font-body text-white p-2">{data?.text}</p>
            </div >


        </>

    )


}