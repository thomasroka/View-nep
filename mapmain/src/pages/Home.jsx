import HeroSection from "../components/HeroSection";
import Stats from "../components/Stats";
import Projects from "../components/Projects";
import NewsLetter from "../components/Newsletter";
import About from "../components/About";

const Home = () => {
  return (
    <>
      <HeroSection />
      <About/>
      <Stats />
      <Projects/>
      <NewsLetter/>
    </>
  );
};

export default Home;
