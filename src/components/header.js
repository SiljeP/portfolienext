"use client"
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Navbar from './navbar';

export default function Header() {
    const el = useRef(null);
    useEffect(() => {
        const typed = new Typed('#autoType', {
            strings: ["Silje", "24 years old", "studying frontend development"],
            startDelay: 800,
            backDelay: 500,
            typeSpeed: 70,
            backSpeed: 60,
            cursorChar: "|"
        })
        // Destroying
        return () => {
            typed.destroy();
        };
    }, []);

    return (

        <header className=" font-title font-bold flex justify-between w-full text-darkColor text-5xl mt-[10%]">
            <h1 className='w-[60%]'>Hi! I&apos;m <span id="autoType" ref={el} ></span></h1>
            <Navbar/>
        </header>


    )
}
