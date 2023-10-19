import "./app.scss";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Cursor from "./components/cursor/Cursor";
import Parralax from "./components/parallax/Parralax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";

export default function App() {
  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parralax type={"services"} />
      </section>
      <section>
        <Services/>
      </section>
      <section id="Portfolio">
        <Parralax type={"portfolio"} />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
}
