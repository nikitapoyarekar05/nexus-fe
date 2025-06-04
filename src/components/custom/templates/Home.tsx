import HeroSection from "../organisms/HeroSection";
import SubHeroSection from "../organisms/SubHeroSection";
import Testimonials from "../organisms/Testimonials";
import Advertisement from "../organisms/Advertisement";

const Home = () => {
  return (
    <>
      <HeroSection />
      <div className="bg-gradient-to-b from-white to-violet-50">
        <SubHeroSection />
        <Testimonials />
        <Advertisement />
      </div>
    </>
  );
};

export default Home;
