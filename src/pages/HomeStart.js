//Page Components

import HomeSection from '../components/HomeSection';
import ServicesSection from '../components/ServicesSection';
import FeaturedEngagements from '../components/FeaturedEngagements';
import FeaturedNews from '../components/FeaturedNews';
import Spotlight from '../components/Spotlight';

const HomeStart = () => {
  return (
    <>
      <HomeSection />
      <ServicesSection />
      <FeaturedEngagements />
      <Spotlight />
      <FeaturedNews />
    </>
  );
};

export default HomeStart;
