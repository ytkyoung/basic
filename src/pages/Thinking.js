import ThinkIntro from '../components/ThinkIntro';
import ThinkTwo from '../components/ThinkTwo';
import ThinkListing from '../components/ThinkListing';
import ScrollTop from '../components/ScrollTop';
//Animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const News = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <ThinkIntro />
      <ThinkTwo />
      <ThinkListing />
      <ScrollTop />
    </motion.div>
  );
};

export default News;
