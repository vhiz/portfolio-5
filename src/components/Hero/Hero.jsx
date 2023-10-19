import { useRef } from "react";
import "./hero.scss";
import { motion, useInView } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const imgVariants = {
  initial: {
    x: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
      type: "spring",
      stiffness: 150,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      duration: 20,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};
export default function Hero() {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <div className="hero">
      <div className="wrapper" ref={ref}>
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          // whileInView="animate"
          animate={isInView && "animate"}
        >
          <motion.h2 variants={textVariants}>Mgbeahurike Victor</motion.h2>
          <motion.h1 variants={textVariants}>Fullstack Web Developer</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>Latest Works</motion.button>
            <motion.button variants={textVariants}>Contact</motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            whileInView="scrollButton"
            src="/Mouse.png"
            alt=""
          />
        </motion.div>
        <motion.div
          variants={sliderVariants}
          initial="initial"
          whileInView="animate"
          className="slidingTextContainer"
        >
          Frontend And Backend Devloper
        </motion.div>
        <motion.div
          variants={imgVariants}
          initial="initial"
          // whileInView="animate"
          animate={isInView && "animate"}
          className="imageContainer"
        >
          <motion.img variants={imgVariants} src="/1.png" alt="" />
        </motion.div>
      </div>
    </div>
  );
}
