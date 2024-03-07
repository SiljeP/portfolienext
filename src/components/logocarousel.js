import Image from 'next/image'
import HTML from '/public/images/html5.png'
import CSS from '/public/images/css.png'
import JS from '/public/images/js.png'
import Reactlogo from '/public/images/react.png'
import Tailwind from '/public/images/tailwind.png'
import FramerMotion from '/public/images/framer-motion.webp'
import NextJS from '/public/images/nextjs.png'
import NodeJS from '/public/images/nodejs.png'
import Sass from '/public/images/sass.png'

export default function LogoCarousel() {
  var lang = useLang("da")
  const logos = [
    { src: HTML, alt: 'HTML5 logo' },
    { src: CSS, alt: 'CSS logo' },
    { src: JS, alt: 'Javascript logo' },
    { src: Reactlogo, alt: 'React logo' },
    { src: Tailwind, alt: 'Tailwind logo' },
    { src: FramerMotion, alt: 'Framer Motion logo' },
    { src: NextJS, alt: 'NextJS logo' },
    { src: NodeJS, alt: 'NodeJS logo' },
    { src: Sass, alt: 'Sass' },
  ]

  return (
    <section id="logos" className=" w-[70%] text-center mx-auto mb-[5%]">
      <h2 className="font-title text-2xl sm:text-4xl font-bold text-white">{lang.program_work}</h2>
      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          {logos.map((logo, index) => (
            <li key={index}>
              <Image src={logo.src} alt={logo.alt} width={100} height={100} style={{ width: "auto", height: "50px" }} />
            </li>
          ))}
        </ul>
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
          {logos.map((logo, index) => (
            <li key={index}>
              <Image src={logo.src} alt={logo.alt} width={100} height={100} style={{ width: "auto", height: "50px" }} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}