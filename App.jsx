import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx"
import HeroImage from "./components/HeroImage.jsx";
import Bootstrap from "./sections/Bootstrap.jsx";
import Portfolio from "./sections/Portfolio.jsx";
import Testimonial from "./sections/Testimoinials.jsx";
import Team from "./components/Team.jsx";
import Trusted from "./sections/Companies.jsx";
import CallToAction from "./components/CallToAction.jsx";
import Footer from "./components/Footer.jsx";

function App() {
    const [theme, setTheme] = useState("light");
  return (
    <div>
      <Navbar/>
      <section className="hero">
  <div className="hero-content">
    <Hero />
    <HeroImage />
  </div>
</section>

      <div className="bootstrap-container">
        <Bootstrap/>
      </div>
      <div className="Project-container">
        <Portfolio/>
      </div>
      <div className="testimonial">
        <Testimonial/>
      </div>
      <div className="team-members">
        <Team/>
      </div>
      <div>
        <Trusted/>
      </div>
      <div>
        <CallToAction/>
        <Footer theme={theme} setTheme={setTheme} />
      </div>
    </div>
  );
}

export default App;