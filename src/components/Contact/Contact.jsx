import { useRef, useState } from "react";
import "./contact.scss";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const items = [
    {
      id: 1,
      h2: "Mail",
      span: "victormgbeahurike82@gmail.com",
    },
    {
      id: 2,
      h2: "Phone No",
      span: "09056394367",
    },
    {
      id: 3,
      h2: "Current State",
      span: "Abuja, Nigeria",
    },
  ];

  const variants = {
    initial: {
      y: 500,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };
  const ref = useRef();
  const isInView = useInView(ref, { margin: "100px" });

  const [error, setError] = useState(false);
  const [sucess, setSucess] = useState(false);
  const [load, setload] = useState(false);
  const emailref = useRef();
  const handleSubmit = (e) => {
    setload(true);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_x6nmbld",
        "template_k1st22t",
        emailref.current,
        "SjYsLTVwgujolV-mp"
      )
      .then(
        (result) => {
          setSucess(true);
          setError(false);
          setload(false);
        },
        (error) => {
          setError(true);
          setSucess(false);
        }
      );
  };
  return (
    <motion.div
      ref={ref}
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Contact Me</motion.h1>
        {items.map((item) => (
          <motion.div className="item" key={item.id} variants={variants}>
            <motion.h2>{item.h2}</motion.h2>
            <motion.span>{item.span}</motion.span>
          </motion.div>
        ))}
      </motion.div>
      <motion.div className="formContainer">
        <motion.div
          className="phone"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{
            duration: 1,
            delay: 3,
          }}
        >
          <svg
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="450px"
            height="450px"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <motion.path
                initial={{ pathLength: 0 }}
                transition={{ duration: 2 }}
                animate={isInView && { pathLength: 1 }}
                d="M14.87 32a17.67 17.67 0 0 1 0-25"
              ></motion.path>
              <motion.path
                initial={{ pathLength: 0 }}
                transition={{ duration: 2 }}
                animate={isInView && { pathLength: 1 }}
                d="M20 26.87a10.41 10.41 0 0 1 0-14.71"
              ></motion.path>
              <motion.path
                initial={{ pathLength: 0 }}
                transition={{ duration: 2 }}
                animate={isInView && { pathLength: 1 }}
                d="m28 30-5.43 5.43a8.77 8.77 0 0 0-2.57 6.2V52"
              ></motion.path>
              <motion.path
                initial={{ pathLength: 0 }}
                transition={{ duration: 2 }}
                animate={isInView && { pathLength: 1 }}
                d="M40 56h9a3 3 0 0 0 3-3V19a3 3 0 0 0-3-3H31a3 3 0 0 0-3 3v19.33a2 2 0 0 0 3.42 1.42l4.46-4.45a3.23 3.23 0 0 1 4.41-.24 3.12 3.12 0 0 1 .12 4.53l-3.29 3.29a9.83 9.83 0 0 0-2.88 7 6.25 6.25 0 0 1-6.24 6.2"
              ></motion.path>
              <line x1="39" y1="52" x2="41" y2="52"></line>
              <line x1="36" y1="20" x2="44" y2="20"></line>
            </g>
          </svg>
        </motion.div>
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 4,
          }}
          ref={emailref}
          onSubmit={handleSubmit}
        >
          <input type="text" placeholder="Name" name="name" required />
          <input type="email" placeholder="Email" name="email" required />
          <textarea
            placeholder="Message..."
            cols="10"
            rows="10"
            name="message"
            required
          ></textarea>
          {sucess ? (
            <p>Thank you for reaching out hope to work with you soon😄💛</p>
          ) : error ? (
            <p>Something went wrong reload page</p>
          ) : (
            <button type="submit" disabled={load && true}>
              Send
            </button>
          )}
        </motion.form>
      </motion.div>
    </motion.div>
  );
}
