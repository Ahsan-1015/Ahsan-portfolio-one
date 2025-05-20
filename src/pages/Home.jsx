import Hero from '../components/Hero';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Skills from './Skills';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
