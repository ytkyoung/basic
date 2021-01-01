//Page Components

import HomeSection from '../components/HomeSection';
import ServicesSection from '../components/ServicesSection';
import FeaturedEngagements from '../components/FeaturedEngagements';
import FeaturedNews from '../components/FeaturedNews';
import Spotlight from '../components/Spotlight';
import Test from '../components/Test';

const HomeStart = () => {
  return (
    <section>
      <HomeSection />
      <ServicesSection />
      <FeaturedEngagements />
      <Spotlight />
      <FeaturedNews />
      <Test />
    </section>
  );
};

export default HomeStart;
