import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/home/About";
import CollabSec from "./pages/home/CollabSec";
import FeaturesSection from "./pages/home/FeaturesSection";
import HeroSection from "./pages/home/HeroSection";
import OurFeatures from "./pages/home/OurFeatures";
import PricingPlans from "./pages/home/Pricing";
import Working from "./pages/home/Working";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <About />
      <OurFeatures />
      <Working />
      <PricingPlans />
      <CollabSec />
      <Footer />
    </>
  );
};

export default App;
