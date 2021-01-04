import AboutIntro from '../components/AboutIntro';
import AboutGallery from '../components/AboutGallery';
import AboutBrand from '../components/AboutBrand';
import AboutSnapshot from '../components/AboutSnapshot';
import AboutCapabities from '../components/AboutCapabities';
import AboutAwards from '../components/AboutAwards';
// import KriselMisel from '../components/KriselMisel';
import ScrollTop from '../components/ScrollTop';

//Animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const About = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      // style={{ backgroundColor: 'rgba(244, 0, 0, 0.31)' }}
    >
      <AboutIntro />
      <AboutGallery />
      <AboutBrand />
      <AboutSnapshot />
      <AboutCapabities />
      <AboutAwards />
      {/* <KriselMisel /> */}
      <ScrollTop />
    </motion.div>
  );
};

export default About;
