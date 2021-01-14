import ThinkIntro from '../components/ThinkIntro';
import ThinkTwo from '../components/ThinkTwo';
import ThinkListing from '../components/ThinkListing';
import ScrollTop from '../components/ScrollTop';
//Animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
import styled from 'styled-components';

const News = ({ theme }) => {
  return (
    <NewsSection>
      <motion.div
        exit="exit"
        variants={pageAnimation}
        initial="hidden"
        animate="show"
      >
        <ThinkIntro />
        <ThinkTwo />
        <ThinkListing theme={theme} />
        <ScrollTop />
      </motion.div>
    </NewsSection>
  );
};

const NewsSection = styled.section`
  margin: 0 auto;
  padding: 0 5%;
`;

export default News;
