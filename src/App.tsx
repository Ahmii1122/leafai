import Navbar from "./components/Navbar";
import About from "./pages/home/About";
import FeaturesSection from "./pages/home/FeaturesSection";
import HeroSection from "./pages/home/HeroSection";
import OurFeatures from "./pages/home/OurFeatures";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <About />
      <OurFeatures />
    </>
  );
};

export default App;
