//Page Components

import HomeSection from '../components/HomeSection';
import ServicesSection from '../components/ServicesSection';
import FeaturedEngagements from '../components/FeaturedEngagements';
import FeaturedNews from '../components/FeaturedNews';
import Spotlight from '../components/Spotlight';
// import Krisel from '../components/Krisel';
import ScrollTop from '../components/ScrollTop';

import styled from 'styled-components';

//Animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const HomeStart = (props) => {
  console.log(props);
  return (
    <HomeStartSection>
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
    </HomeStartSection>
  );
};

const HomeStartSection = styled.section`
  margin: 0 auto;
  padding: 0 5%;
`;

export default HomeStart;
