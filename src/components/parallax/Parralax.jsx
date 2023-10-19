import { useRef } from "react";
import "./parralax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Parallax({ type }) {
  const background =
    type === "services"
      ? "linear-gradient(180deg, #1b1b1b, #111111)"
      : "linear-gradient(180deg, #1b1b1b, #464545)";

  const text = type === "services" ? "Services Rendered" : "Portfolio";
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <div ref={ref} className="parallax" style={{ background }}>
      <motion.h1 style={{ y: yText }}>{text}</motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "services" ? "/planets.png" : "/sun.png"
          })`,
        }}
        className="planets"
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
}
