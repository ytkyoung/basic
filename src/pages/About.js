import AboutIntro from '../components/AboutIntro';
import AboutGallery from '../components/AboutGallery';
import AboutBrand from '../components/AboutBrand';
import AboutSnapshot from '../components/AboutSnapshot';
import AboutCapabities from '../components/AboutCapabities';
import AboutAwards from '../components/AboutAwards';
// import KriselMisel from '../components/KriselMisel';
import ScrollTop from '../components/ScrollTop';
import Sec1 from '../components/Sec1';
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
      <Sec1 sektion={'A'} />
      <AboutSnapshot />
      <Sec1 sektion={'B'} />
      <AboutCapabities />
      <Sec1 sektion={'C'} />
      <AboutAwards />
      {/* <KriselMisel /> */}
      <ScrollTop />
    </motion.div>
  );
};

export default About;
