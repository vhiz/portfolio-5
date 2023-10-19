import { useRef } from "react";
import "./porfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const items = [
  {
    id: 57,
    title: "Portfolio page",
    img: "/portfolio.png",
    desc: "The aim of this website is obviously to showcase my skills just needed to showcase my works and projects i've been involved in, Technologies used are React, Vite, Emailjs And Sass for the styling",
    url: "",
  },
  {
    id: 12,
    title: "Social Media App",
    img: "/social.png",
    desc: "The name of the app is Aura it is just like your regular Facebook but not as good it has the send message functionality that is you can send a message to someone as long as you are friends with that person but you have to register there are three users two were created by google then this is the user name and password of the last account,{vhiz, 1234}. The technologies used are Mongodb, React,Sass, Socket io, Context Api, Object-oriented programming, and Express.",
    url: "https://aura-5911c.web.app/login",
  },
  {
    id: 5,
    title: "Blog App",
    img: "/blog.png",
    desc: "As we all know a blog is a place where someone can go and read the latest update we have blogs like Linda Ikeji and many others, I then decided to create one of my own so to have one the name isJerrys’ blog (cause Jerry gets away with everything). The technologies used are React, Vite, Sass, MongoDB, Express, and Redux Toolkit.",
    url: "https://blogclient.onrender.com/",
  },
  // {
  //   id: 66,
  //   title: "Booking App",
  //   img: "/booking.png",
  //   desc: "As we all know many people travel a lot around Nigeria and it can be a hassle to get a place to stay for some time well say no more with this app you can search for open places to stay at affordable prices (that’s if people hotels and resort could just register). But you could check it out there are a lot of free spots like 4 demo data below is the admin page to add those hotels and reservations. Technologies used are React, Vite, Express, Mongodb, Context API, and Redux Toolkit.",
  //   url: "",
  // },
  // {
  //   id: 94,
  //   title: "Admin Dashboard",
  //   img: "/admin.png",
  //   desc: "This is an Admin dashboard you cant connect it to any website you just have to know how to customize it luckily I know how cause I built it, it is connected to the Booking app above and the username and password are {admin, admin} , The technologies used are Vite, React,Sass, Redux Toolkit.",
  //   url: "",
  // },
  {
    id: 92,
    title: "YouTube App",
    img: "/youtbe.png",
    desc: "This is a video streaming app as you guessed youtube, you can add stream and delete your videos but you first have to create an account you can use any email to register as you also guessed by the way all the apps are deployed on Firebase in case you have found my portfolio enough to get to this point. Technologies used are React(again….), Vite, Express, Sass, and Firebase.",
    url: "https://video-de607.web.app/",
  },
  {
    id: 92,
    title: "Fiverr Clone",
    img: "/fiverr.png",
    desc: "Hope I don’t hold up for this, Just like the main application this clone does exactly what the main app does but not as well or as effectively you can add a gig look up a gig and send a message to a potential customer. Only if people could just register to see if it could handle a million requests at a time (probably not). The technologies used are React, Vite, Redux, MongoDB, Express, Sass .",
    url: "https://fiverr-eef97.web.app/",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  const variants = {
    initial: {
      opacity: 0,
      scale: 0.5,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <motion.div
            className="imgContainer"
            variants={variants}
            initial="initial"
            whileInView="animate"
            ref={ref}
          >
            <LazyLoadImage src={item.img} alt="" effect="blur" />
          </motion.div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>
              <a href={item.url} target="blank">
                See Demo
              </a>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default function Portfolio() {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div
          style={{ scaleX: scaleX }}
          className="progressBar"
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single key={item.id} item={item} />
      ))}
    </div>
  );
}
