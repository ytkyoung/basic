import styled from 'styled-components';
import { motion } from 'framer-motion';
import { titleAnim, fade, titleDot } from '../animation';

const AboutIntro = () => {
  return (
    <>
      <AboutIntroStyle>
        <motion.div className="About-intro-title">
          <div className="hide">
            <motion.h1 variants={titleAnim}>WE TURN</motion.h1>
          </div>
          <div className="hide">
            <motion.h1 variants={titleAnim}>CULTURAL</motion.h1>
          </div>
          <div className="hide">
            <motion.h1 variants={titleAnim}>VALUE</motion.h1>
          </div>
        </motion.div>
        <div className="About-intro-title-part2">
          <motion.h1 variants={titleDot}>●INTO</motion.h1>
          <motion.h1 variants={titleAnim}>COMPANY</motion.h1>
          <motion.h1 variants={titleAnim}>VALUE</motion.h1>
          <motion.p variants={fade}>
            BASIC® is an independent branding & experience design company
            working at the intersection of culture, design, and technology. We
            value our craft, have a deep passion for progression, and exist to
            solve challenges for brands we believe in. Since the beginning, our
            mission has been to do great work and to have a great time doing it.
            We believe our mission has guided us well.
          </motion.p>
        </div>
      </AboutIntroStyle>
    </>
  );
};

const AboutIntroStyle = styled.section`
  background: magenta;
  height: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid green;
  .About-intro-title {
    background: red;
    flex: 1 1 50%;
    padding-top: 3%;
    align-self: flex-start;
    background: red;
  }
  .About-intro-title-part2 {
    flex: 1 1 50%;
    padding: 2rem;
    padding-top: 16%;
    align-self: flex-end;
    background: green;
  }

  p {
    font-size: 3rem;
    font-family: 'Inter', sans-serif;
    font-weight: medium;
    line-height: 110%;
  }
`;

export default AboutIntro;
