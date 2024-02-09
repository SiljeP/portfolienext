"use client"
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function Header(){
    const el = useRef(null);
    useEffect(() => {
        const typed = new Typed('#autoType', {
        strings: [ "Silje", "24 years old","studying front-end development" ],
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

    return(
        <header className="flex align-center justify-between">
         <h1>Hi! I&apos;m <span id="autoType" ref={el} ></span></h1>
             <nav className="text-bold">
                <ul className="flex">
                    <li className="list-none p-2 ml-2">About</li>
                    <li className="list-none p-2 ml-2">Work</li>
                    <li className="list-none p-2 ml-2">Contact</li>
                </ul>
             </nav>
        </header>
    )
}
