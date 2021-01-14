import NewsIntro from '../components/NewsIntro';
import NewsListing from '../components/NewsListing';
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
        <NewsIntro />
        <NewsListing theme={theme} />
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
