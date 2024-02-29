"use client"

import LogoCarousel from "./logocarousel"

export default function Footer() {

    return (

        <footer className="w-100% h-[100px] mt-10 text-center">
            <p>This is my footer</p>
            <LogoCarousel className="bottom-0 m-5 w-90%" />
        </footer>


    )
}