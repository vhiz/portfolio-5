import Sidebar from "../Sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

export default function Navbar() {
  const lists = [
    {
      img: "/whatsapp.png",
      url: "https://wa.me/09056394367?text=Hello%20welcome%2C%20how%20may%20I%20be%20of%20assistance",
    },
    {
      img: "/linkedin.png",
      url: "https://www.linkedin.com/in/mgbeahurike-victor-40981723b",
    },
    {
      img: "/twitter.png",
      url: "https://twitter.com/The_api_guy33?t=xAKsZTpLidITkXlAGtTBWA&s=09",
    },
    {
      img: "/github.png",
      url: "https://github.com/vhiz",
    },
  ];
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <span>
          <motion.img
            initial={{ opacity: 0, scale: 0.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            src="/logo.png"
            alt=""
          />
        </span>
        <motion.div
          className="social"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 1.2 }}
        >
          {lists.map((list, i) => (
            <motion.a
              href={list.url}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 1.2 }}
              key={i}
              target="blank"
            >
              <img src={list.img} alt="" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
