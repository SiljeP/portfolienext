"use client"
import { motion } from "framer-motion"

export default function Work() {
    return (
        <> <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 }
            }}>

            <h1 id="work" className="font-title text-white text-6xl text-center mt-10">Work</h1>
            <p className="font-body text-xl text-center">Most of my school projects have been before learning React and therefore this page, my portfolio, is properly the most up to date project I have. In this portfolio I make use of: React, next.js, tailwind, framer motion for animations, typed.js library and more.</p>
            <p className="font-body text-xl text-center">Other projects, from before React, includes working with webapi&apos;s on a pokedex, check out here</p>
        </motion.div>

        </>
    )
}