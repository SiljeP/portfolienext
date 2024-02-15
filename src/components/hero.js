"use client"

import Image from "next/image"
import { Starsvg } from "./starsvg"
import { Starsvgleft } from "./starsvgleft"
import Logoslider from "./logoslider"
import LogoCarousel from "./logocarousel"

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

            <Logoslider/>
            <LogoCarousel/>
            </div>
        </>

    )
}