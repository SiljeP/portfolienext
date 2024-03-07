"use client"
import useLang from "@/helpers/language"
import { motion } from "framer-motion"

export default function Work() {

    var lang = useLang("da")

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

            <h1 id="work" className="font-title text-white text-4xl md:text-6xl text-center mt-10">{lang.menu_work}</h1>
            <p className="font-body text-l md:text-2xl text-center">{lang.work_first}</p>
            <p className="font-body text-l md:text-2xl text-center">{lang.work_second}</p>
        </motion.div>

        </>
    )
}