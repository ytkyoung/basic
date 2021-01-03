//Page Components

import HomeSection from '../components/HomeSection';
import ServicesSection from '../components/ServicesSection';
import FeaturedEngagements from '../components/FeaturedEngagements';
import FeaturedNews from '../components/FeaturedNews';
import Spotlight from '../components/Spotlight';
import Krisel from '../components/Krisel';

const HomeStart = () => {
  return (
    <section>
      <HomeSection />
      <ServicesSection />
      <FeaturedEngagements />
      <Spotlight />
      <FeaturedNews />
      <Krisel />
    </section>
  );
};

export default HomeStart;
