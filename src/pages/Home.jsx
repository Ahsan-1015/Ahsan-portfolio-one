import Hero from "../components/Hero";

import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
  return (
    <div className="border border-gray-700 rounded-xl space-y-10">
      <Hero />
      <Skills />
      <Projects showViewAll={true} />
      <Contact className="gradient-border" />
    </div>
  );
};

export default Home;
