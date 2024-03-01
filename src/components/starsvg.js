import * as React from "react"
import { motion } from "framer-motion"
export const Starsvg = (props) => (

  <svg
    // width={151}
    // height={148}
    viewBox="0 0 151 148"
    fill="inherit"
    xmlns="http://www.w3.org/2000/svg"
    className="z-5"
    {...props}

  >
    <motion.g id="star/filled/wide"
      animate={{ rotate: ["10deg", "5deg", "10deg"] }}
      transition={{
        times: [1],
        duration: 3,
        repeat: Infinity,
        type: "keyframes",
        ease: "easeInOut",
      }}>
      <path
        id="star/wide"
        d="M75.9817 0L77.25 34.2209C78.0259 55.1571 94.8249 71.9475 115.762 72.7127L150.982 74L115.762 75.2873C94.8249 76.0525 78.0259 92.8429 77.25 113.779L75.9817 148L74.7134 113.779C73.9375 92.8429 57.1385 76.0525 36.2019 75.2873L0.981689 74L36.2018 72.7127C57.1384 71.9475 73.9375 55.1571 74.7134 34.2209L75.9817 0Z"
        fill="inherit"
      />
    </motion.g>
  </svg>
)
export { Starsvg as ReactComponent }
