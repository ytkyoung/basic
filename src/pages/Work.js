import WorkIntro from '../components/WorkIntro';
import WorkServices from '../components/WorkServices';
import ScrollTop from '../components/ScrollTop';
//Animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const Work = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <WorkIntro />
      <WorkServices />
      <ScrollTop />
    </motion.div>
  );
};

export default Work;
