"use client"

import Image from "next/image"
import { Starsvg } from "./starsvg"
import { Starsvgleft } from "./starsvgleft"

export default function Hero() {
    return (
        <>
            <div className="h-[500px] relative">

                <div className="w-24 h-24 absolute left-0 top-0 ">
                    <Starsvg className="" />
                </div>
                <div className="w-24 h-24 absolute bottom-1 right-1 ">
                    <Starsvgleft className="" />
                </div>
                <div className="w-fit rounded- text-xl font-title  absolute right-0 top-0 hover:shadow-lg hover:shadow-darkColor rounded-b-lg" >
                    <h2 className="bg-lightColor text-center shadow-lg shadow-darkColor rounded-md font-body p-2">Available for:</h2>
                    <p className=" p-3">Unpaid internship from 6th of May 20/24 til 14th of June 2024</p>
                </div>

                <div className="absolute bottom-0 left-0 flex">
                    <h2>I work with</h2>
                    <Image src="/images/html5.png" width={30} height={50} alt="HTML5 logo"/>
                    <Image src="/images/css.png" width={30} height={50} alt="CSS logo"/>
                    <Image src="/images/js.png" width={30} height={50} alt="Javascript logo"/>
                    <Image src="/images/react.png" width={30} height={50} alt="React logo"/>
                    <Image src="/images/tailwind.png" width={30} height={50} alt="Tailwind logo"/>
                    <Image src="/images/framer-motion.webp" width={30} height={50} alt="Framer Motion logo"/>
                    <Image src="/images/nextjs.png" width={30} height={50} alt="Next JS logo"/>
                    <Image src="/images/nodejs.png" width={30} height={50} alt="Node JS logo"/>
                </div>
            </div>
        </>

    )
}