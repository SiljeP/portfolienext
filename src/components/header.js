"use client"
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag, faFlagCheckered} from '@fortawesome/free-solid-svg-icons'

export default function Header(){
    const el = useRef(null);
    useEffect(() => {
        const typed = new Typed('#autoType', {
        strings: [ "Silje", "24 years old","studying frontend development" ],
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
        <> 
        <div className='flex flex-col align-center items-center justify-center font-title font-bold text-xl'>
            <p>Language</p>
            <div className='block text-xl'>
            <FontAwesomeIcon icon={faFlag} className='p-2'/>
            <FontAwesomeIcon icon={faFlagCheckered} className='p-2' />
            </div>
        </div>
        <header className="flex align-center justify-between font-title font-bold text-darkColor text-xl">
         <h1>Hi! I&apos;m <span id="autoType" ref={el} ></span></h1>
             <nav className="text-bold">
                <ul className="flex">
                    <li className="list-none p-2 ml-2">About</li>
                    <li className="list-none p-2 ml-2">Work</li>
                    <li className="list-none p-2 ml-2">Contact</li>
                </ul>
             </nav>
        </header>
    
        </>
    )  
}
