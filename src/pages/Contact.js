import ContactIntro from '../components/ContactIntro';
import ContactOffices from '../components/ContactOffices';
import ContactFollow from '../components/ContactFollow';
import ContactSec from '../components/ContactSec';
import ContactSec1 from '../components/ContactSec';
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
      <ContactSec1 />
      <ContactOffices />
      <ContactSec />
      <ContactFollow />
      <ScrollTop />
    </motion.div>
  );
};

export default News;
