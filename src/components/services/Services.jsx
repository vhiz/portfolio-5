import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const items = [
  {
    title: "Responsive web design",
    p: "I offer clean and interractable responsive websites",
  },
  {
    title: "Dynamic Websites",
    p: "I use diffrent technologies to ensure clean and dynamic web apps",
  },
  {
    title: "Landing Pages",
    p: "I create simple and easy to use landing page for your business",
  },
  {
    title: "Hosting",
    p: "Your sites will be hosted on working with me",
  },
];
export default function Services() {
  const variants = {
    initial: {
      x: -500,
      opacity: 0,
      y: 100,
    },
    animate: {
      x: 0,
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.3,
        type: "spring",
      },
    },
  };
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <div className="cover" ref={ref}>
      <motion.div
        className="services"
        variants={variants}
        initial="initial"
        animate={isInView && "animate"}
      >
        <motion.div className="textContainer" variants={variants}>
          <p>
            Make your dream digital today <br />
            Contact us
          </p>
          <hr />
        </motion.div>
        <motion.div className="tittleContainer" variants={variants}>
          <div className="tittle">
            <LazyLoadImage src="/2.jpg" alt="" effect="blur"/>
            <h1>
              <motion.b whileHover={{ color: "orange" }}>Get</motion.b> More
            </h1>
          </div>
          <div className="tittle">
            <h1>
              <motion.b whileHover={{ color: "orange" }}>Engagements'</motion.b>{" "}
              Online.
            </h1>
            <button>Services</button>
          </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
          {items.map((item, i) => (
            <motion.div
              className="box"
              key={i}
              whileHover={{ backgroundColor: "lightgray", color: "black" }}
            >
              <h2>{item.title}</h2>
              <p>{item.p}</p>
              <button>Get more</button>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
