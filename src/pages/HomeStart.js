//Page Components

import HomeSection from '../components/HomeSection';
import ServicesSection from '../components/ServicesSection';
import FeaturedEngagements from '../components/FeaturedEngagements';
import FeaturedNews from '../components/FeaturedNews';
import Spotlight from '../components/Spotlight';
// import Krisel from '../components/Krisel';
import ScrollTop from '../components/ScrollTop';
//Animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const HomeStart = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <HomeSection />
      <ServicesSection />
      <FeaturedEngagements />
      <Spotlight />
      <FeaturedNews />
      {/* <Krisel /> */}
      <ScrollTop />
    </motion.div>
  );
};

export default HomeStart;
