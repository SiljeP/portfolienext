"use client"
import { motion, useCycle, AnimatePresence, MotionConfig } from "framer-motion";
import Image from "next/image";
import Instagram from '/public/images/instagram.png'
import Linkedin from '/public/images/linkedin.png'
import Mail from '/public/images/mail.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import changelang from "@/helpers/language";

export default function Navbar() {

    const [mobileNav, toggleMobileNav] = useCycle(false, true)

    return (
        <>
            <nav className="sticky top-0 inset-x-0 h-16 z-50">
                <div className="container m-auto  h-full p-1 flex justify-center items-center">
                    <div className="relative z-50 p-2">
                        <motion.button
                            animate={mobileNav ? "open" : "closed"}
                            onClick={() => toggleMobileNav()}
                            className="flex flex-col space-y-1 h-full items-center m-auto">
                            <h2 className="text-l md:text-xl">Menu</h2>
                            <motion.span variants={{
                                closed: { rotate: 0, y: 0, background: "#FFFFFF" },
                                open: { rotate: 45, y: 10, background: "#FF9292" }
                            }} className="w-10 h-[5px] bg-white  block"></motion.span>
                            <motion.span variants={{
                                closed: { opacity: 1 },
                                open: { opacity: 0 }
                            }} className="w-10 h-[5px] bg-white block"></motion.span>
                            <motion.span variants={{
                                closed: { rotate: 0, y: 0, background: "#FFFFFF" },
                                open: { rotate: -45, y: -9, background: "#FF9292" }
                            }} className="w-10 h-[5px] bg-white block"></motion.span>
                        </motion.button>
                    </div>
                </div>
                <AnimatePresence>
                    {mobileNav && (
                        <MotionConfig transition={{
                            type: "spring",
                            bounce: 0.099,
                        }}>
                            <motion.div
                                key="mobile-nav"
                                variants={{
                                    open: {
                                        x: "100%",
                                        transition: {
                                            when: "beforeChildren",
                                            type: "spring",
                                            bounce: 0.099,
                                        }
                                    },

                                    closed: {
                                        x: "300%",
                                        transition: {
                                            when: "afterChildren",
                                            type: "spring",
                                            bounce: 0.099,
                                        }
                                    }
                                }}
                                initial="closed"
                                animate="open"
                                exit="closed"
                                className="fixed inset-0 w-[40%] md:w-[30%] z-40 bg-accentColorLight space-y-10 p-6 container mx-auto flex flex-col justify-center">
                                <motion.div
                                    variants={{
                                        open: {
                                            y: "0%",
                                            opacity: 1
                                        },
                                        closed: {
                                            y: "25%",
                                            opacity: 0
                                        }
                                    }}

                                >
                                    <ul className="space-y-5">
                                        <motion.li
                                            whileTap={{ scale: 0.95 }}>
                                            <a href="#" className="scroll-smooth text-xl md:text-4xl font-bold" onClick={() => toggleMobileNav(false)}>
                                                <FontAwesomeIcon onClick={() => changelang()} className="text-4xl" icon={faLanguage} /></a>
                                        </motion.li>
                                        <motion.li
                                            whileTap={{ scale: 0.95 }}>
                                            <a href="#about" className="scroll-smooth text-xl md:text-4xl font-bold" onClick={() => toggleMobileNav(false)}>About</a>
                                        </motion.li>
                                        <motion.li
                                            whileTap={{ scale: 0.95 }}>
                                            <a href="#work" className="scroll-smooth text-xl md:text-4xl font-bold" onClick={() => toggleMobileNav(false)}>Work</a>
                                        </motion.li>
                                        <motion.li
                                            whileTap={{ scale: 0.95 }}>
                                            <a href="#contact" className="scroll-smooth text-xl md:text-4xl font-bold" onClick={() => toggleMobileNav(false)}>Contact</a>
                                        </motion.li>
                                    </ul>
                                </motion.div>
                                <motion.div
                                    variants={{
                                        open: {
                                            y: "0%",
                                            opacity: 1
                                        },
                                        closed: {
                                            y: "25%",
                                            opacity: 0
                                        }
                                    }}
                                    className="w-full bg-white"></motion.div>
                                <motion.div
                                    variants={{
                                        open: {
                                            y: "0%",
                                            opacity: 1
                                        },
                                        closed: {
                                            y: "25%",
                                            opacity: 0
                                        }
                                    }}
                                >
                                    <ul className="flex items-left md:items-center flex-col sm:flex-row gap-x-2 md:gap-x-5 justify-center">
                                        <li>
                                            <a href="mailto:silje.a.paldrup@gmail.com">
                                                <Image src={Mail} alt={"Mail logo"} height={100} width={100} style={{ width: "auto", height: "50px" }}></Image>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/in/silje-agø-paldrup-4996882a7" target="_blank" >
                                                <Image src={Linkedin} alt={"LinkedIn logo"} height={100} width={100} style={{ width: "auto", height: "50px" }}></Image>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://instagram.com/siljepaldrup" target="_blank" >
                                                <Image src={Instagram} alt={"Instagram logo"} height={100} width={100} style={{ width: "auto", height: "50px" }}></Image>
                                            </a>
                                        </li>
                                    </ul>
                                </motion.div>
                            </motion.div></MotionConfig>)
                    }
                </AnimatePresence>

            </nav>
        </>
    )
}