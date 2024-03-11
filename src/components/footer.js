"use client"

import LogoCarousel from "./logocarousel"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Instagram from '/public/images/instagram.png'
import Linkedin from '/public/images/linkedin.png'
import Mail from '/public/images/mail.png'
import useLang from "@/helpers/language";


export default function Footer() {

    var { lang } = useLang("en")

    return (

        <footer className="w-100% w-full h-full mt-10 shadow-[0px_-10px_16px_1px_#FEB2B2]">

            <div className="flex flex-wrap align-center justify-around p-3 ">

                <a href="#header">
                    <p className="color-white text-right cursor-pointer font-body p-3 mb-4">{lang.backtotop}<FontAwesomeIcon className="text-s px-3 color-white" icon={faArrowUp} /></p>
                </a>
                <ul className="flex items-left md:items-center flex-row gap-x-2 md:gap-x-5 justify-center pb-4 mb-8">
                    <li>
                        <a href="mailto:silje.a.paldrup@gmail.com">
                            <Image src={Mail} alt={"Mail logo"} height={100} width={100} style={{ width: "auto", height: "40px" }}></Image>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/silje-agø-paldrup-4996882a7" target="_blank" >
                            <Image src={Linkedin} alt={"LinkedIn logo"} height={100} width={100} style={{ width: "auto", height: "40px" }}></Image>
                        </a>
                    </li>
                    <li>
                        <a href="https://instagram.com/siljepaldrup" target="_blank" >
                            <Image src={Instagram} alt={"Instagram logo"} height={100} width={100} style={{ width: "auto", height: "40px" }}></Image>
                        </a>
                    </li>
                </ul>
            </div>
            <p className="text-white text-s font-body text-center pb-3" >{lang.star_hint}</p>
            <div className="hidden md:block mb-0 w-80% mt-10">
                <LogoCarousel />
            </div>
        </footer>


    )
}