import NewsIntro from '../components/NewsIntro';
import NewsListing from '../components/NewsListing';
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
      <NewsIntro />
      <NewsListing />
      <ScrollTop />
    </motion.div>
  );
};

export default News;
