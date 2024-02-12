"use client"

import Image from "next/image"

export default function Aboutme() {

    return (
        <>
            <article className="text-center">
                <h2 className="font-bold text-darkColor">About me</h2>
                <p className="text-lightColor">Hello world! My name is Silje, and I&apos;m a Danish, 24 year old girl, studying to become a frontend developer. I have an eye for detail, love problemsolving and are able to focus on a project for long periods of time.</p>
                <p>I&apos;m currently on the main course in VET (Vocational education and
                    training) in Web development at <a href="https://www.rts.dk/in-english"> Roskilde Technical College(VET).</a></p>
                <p>I&apos;m currently looking for an internship in front-end development lasting six weeks (paid by my school - not you!) in the period <span>22. January 2024 to 8.March 2024. </span></p>
            </article>
            <section >
                <h3>Personal life</h3>
                <div >
      
                        <p >I have plenty of hobbies that I love to do when I&apos;m not
                            coding. I enjoy rugtufting slightly ugly rugs, painting slightly ugly pictures, and bookbinding ugly paperbacks to
                            much prettier hardbacks. My dog Bucky is also very happy when I take him on long walks, so I try to do
                            that a lot too. I also enjoy reading, and read about 120 books a year.</p>
                </div>
            </section>
        </>



    )
}