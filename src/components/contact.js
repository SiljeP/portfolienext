"use client"
import { motion } from "framer-motion"
import { Starsvg } from "./starsvg"
import { useContext } from "react"
import ShowFactContext from "@/helpers/showfactcontext"
import useLang from "@/helpers/language"

export default function Contact() {

    const [showfact, setShowfact] = useContext(ShowFactContext)

    var { lang } = useLang("en")
    return (

        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 }
            }}>
            <div className="w-14 h-14 md:w-24 md:h-24 absolute top-100 left-10 md:left-40">
                <Starsvg onClick={() => setShowfact(true)} className="fill-white -rotate-12" />
            </div>

            <h1 id="contact" className="font-title text-white p-2 mt-10 text-4xl md:text-6xl text-center">{lang.menu_contact}</h1>
            <p className="font-body text-black p-2 text-l md:text-2xl text-center ">{ }</p>
            <div>
                <form className="max-w-sm mx-auto" name="contact" method="POST" data-netlify="true">
                    {/* Bot-trigger felt */}
                    <div className="hidden">
                        <label>
                            Don’t fill this out if you’re human: <input name="bot-field" />
                        </label>
                    </div>
                    <input type="hidden" name="form-name" value="contact" />
                    <div>
                        <label className="font-body block mb-2 text-l text-white" htmlFor="email">{lang.menu_email}:</label>
                        <input required className="bg-gray-50 border border-gray-300 text-black text-m rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type="text" id="email" name="email" />
                    </div>
                    <div>
                        <label className="font-body block mb-2 text-l pt-2 text-white" htmlFor="message">{lang.menu_message}</label>
                        <textarea required className="font-body bg-gray-50 border border-gray-300 text-black text-m rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" id="message" name="message"></textarea>
                    </div>
                    <div className="my-2 text-center">
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            type="submit" className=" font-title relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-m text-white rounded-lg group bg-gradient-to-br from-darkColor to-accentColorDark group-hover:from-accentColorDark group-hover:to-darkColor hover:text-black  ">
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0">
                                {lang.menu_button}
                            </span>

                        </motion.button>
                    </div>
                </form>
            </div>


        </motion.div>



    )
}


