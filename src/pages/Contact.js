import ContactIntro from '../components/ContactIntro';
import ContactOffices from '../components/ContactOffices';
import ContactFollow from '../components/ContactFollow';
import TestUse from '../components/TestUse';

import Sec1 from '../components/Sec1';
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
      <ContactIntro />
      <TestUse />
      <Sec1 sektion={'A'} />
      <ContactOffices />
      <Sec1 sektion={'B'} />
      <ContactFollow />
      <ScrollTop />
    </motion.div>
  );
};

export default News;
