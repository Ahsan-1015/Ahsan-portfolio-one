import Hero from "../components/Hero";
import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
  return (
    <div className="border border-gray-600 rounded-xl  ">
      <Hero />
      <Skills />
      <Projects showViewAll={true} />
      <Contact />
    </div>
  );
};

export default Home;
