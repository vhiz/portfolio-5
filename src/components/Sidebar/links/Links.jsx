import { motion } from "framer-motion";

export default function Links({ setopen }) {
  const variants = {
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };
  const itemvariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  };
  const items = ["Homepage", "Services", "Portfolio", "Contact"];
  return (
    <motion.div className="links" variants={variants}>
      {items.map((item, i) => (
        <motion.a
          key={i}
          href={`#${item}`}
          variants={itemvariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setopen((pre) => !pre)}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
}
