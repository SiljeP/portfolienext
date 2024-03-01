"use client"
import { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import Navbar from './navbar';
import { Starsvgleft } from './starsvgleft';
import FactStar from '@/helpers/facts';



export default function Header() {

    const [showfact, setShowfact] = useState(false)

    const el = useRef(null);
    useEffect(() => {
        const typed = new Typed('#autoType', {
            strings: ["Silje", "24 years old", "studying frontend development"],
            startDelay: 800,
            backDelay: 300,
            typeSpeed: 70,
            backSpeed: 50,
            cursorChar: "|",
            onComplete: function (self) { self.cursor.remove() }
        })
        // Destroying
        return () => {
            typed.destroy();

        };
    }, []);

    return (

        <header id='header' className=" h-fit sm:h-[300px] font-title font-bold flex justify-between w-full text-darkColor  pt-[10%]">
            <h1 className='w-[60%] text-2xl sm:text-5xl md:text-7xl'>Hi! I&apos;m <span id="autoType" ref={el} ></span></h1>
            <div className="w-24 h-24  right-4 top-0 left-4">
                <Starsvgleft onClick={() => setShowfact(true)} className="fill-white rotate-2" />
            </div>

            <Navbar />
            {showfact ? <FactStar showfact={showfact} setShowfact={setShowfact} /> : null}
        </header>


    )
}
