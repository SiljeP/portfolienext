"use client"

import { Starsvg } from "./starsvg"
import { Starsvgleft } from "./starsvgleft"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";


export default function Hero() {

    return (
        <>
            <article className="h-[500px] relative z-1">
                <div className="w-24 h-24 absolute left-0 top-0 ">
                    <Starsvg className="" />
                </div>
                <div className="w-24 h-24 absolute bottom-1 right-1 ">
                    <Starsvgleft className="" />
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
                    className="w-2/5 text-xl font-title text-center  absolute z-5 right-0 top-10 hover:shadow-lg hover:shadow-darkColor hover:border-4 hover:rounded-lg hover:border-darkColor rounded-b-lg p-2"
                >
                    <h2 className="bg-lightColor text-center shadow-lg shadow-darkColor rounded-md font-body p-2">Available for:</h2>
                    <p className=" p-3">Unpaid internship from 6th of May 20/24 til 14th of June 2024</p>
                    <a href="mailto:silje.a.paldrup@gmail.com?body=Our%20company%20is%20very%20interested%20in%20having%20you%20as%20an%20intern!&subject=Internship!" target="_blank">Interested?</a>
                </motion.div>
                <a href="#about">  <FontAwesomeIcon icon={faAngleDown} className="text-darkColor absolute bottom-4 left-0 right-0 p-3 text-6xl text-center mx-auto" />
                </a>


            </article>
        </>

    )
}