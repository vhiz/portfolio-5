import { useState } from "react";
import "./Cursor.scss";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
  const [position, setposition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const moveMouse = (e) => {
      setposition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveMouse);

    return () => {
      window.removeEventListener("mousemove", moveMouse);
    };
  }, []);
  return (
    <motion.div
      className="cursor"
      animate={{ x: position.x + 10, y: position.y + 10 }}
    ></motion.div>
  );
}
