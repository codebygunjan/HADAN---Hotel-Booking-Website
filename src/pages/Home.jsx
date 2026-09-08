import Hero from "../components/Hero";
import FeaturedHotels from "../components/FeaturedHotels";
import ExclusiveOffers from "../components/ExclusiveOffers";
import Testimonials from "../components/Testimonials";
import NewsLetter from "../components/NewsLetter";

function Home() {
  return (
    <div>
      <>
        <Hero />
        <FeaturedHotels />
        <ExclusiveOffers />
        <Testimonials />
        <NewsLetter />
      </>
    </div>
  );
}

export default Home;
