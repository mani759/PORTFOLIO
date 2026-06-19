import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Work from "../sections/Work";
import Contact from "../sections/Contact";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Contact />
    </div>
  );
};

export default Home;
