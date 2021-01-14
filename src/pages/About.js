import AboutIntro from '../components/AboutIntro';
import AboutGallery from '../components/AboutGallery';
import AboutBrand from '../components/AboutBrand';
import AboutSnapshot from '../components/AboutSnapshot';
import AboutCapabities from '../components/AboutCapabities';
import AboutAwards from '../components/AboutAwards';
// import KriselMisel from '../components/KriselMisel';
import ScrollTop from '../components/ScrollTop';
import Sec1 from '../components/Sec1';
import styled from 'styled-components';
//Animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const About = ({ theme }) => {
  return (
    <AboutSection>
      <motion.div
        exit="exit"
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        // style={{ backgroundColor: 'rgba(244, 0, 0, 0.31)' }}
      >
        <AboutIntro />
        <AboutGallery />
        <AboutBrand theme={theme} />
        <Sec1 sektion={'A'} />
        <AboutSnapshot />
        <Sec1 sektion={'B'} />
        <AboutCapabities />
        <Sec1 sektion={'C'} />
        <AboutAwards />
        {/* <KriselMisel /> */}

        <ScrollTop />
      </motion.div>
    </AboutSection>
  );
};

const AboutSection = styled.section`
  margin: 0 auto;
  padding: 0 5%;
`;

export default About;
