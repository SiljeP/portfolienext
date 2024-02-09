import { motion } from "framer-motion";

const fadeInAnimationVariants = {
     initial: {
         opacity: 0,
         y: 50, // Slightly less downward movement
         scale: 0.95, // Slightly scale down
     },
     animate: {
         opacity: 1,
         y: 0,
         scale: 1,
         transition: {
             duration: 0.5, // Shortened duration for a quicker appearance
             ease: "easeOut", // Easing for a smoother transition
             delay: 0.2, // Delay to create a staggered effect
         },
     },
 };

  export default function Fade({ children }) {
     return (
         <motion.div
             variants={fadeInAnimationVariants}
             initial="initial"
             whileInView="animate"
             viewport={{
                 once: true,
             }}
         >
             {children}
         </motion.div>
     );
 }