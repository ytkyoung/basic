// import basicLogo from '../img/logo_pink.svg';
import styled from 'styled-components';
import LogoAni from '../components/LogoAni2';
import { motion } from 'framer-motion';
import { scrollReveal } from '../animation';
import { useScroll } from './useScroll';

const AboutBrand = ({ theme }) => {
  const [element, controls] = useScroll();
  return (
    <>
      <AboutBrandLogo
        variants={scrollReveal}
        animate={controls}
        initial="hidden"
        ref={element}
      >
        <LogoAni theme={theme} />
      </AboutBrandLogo>
    </>
  );
};

const AboutBrandLogo = styled(motion.div)`
  padding: 5rem 0rem;
  width: 100%;
  overflow: hidden;
  & img {
    width: 50%;
  }
  .container-svg {
    width: 50%;
    /* fill: white; */
  }
  @media (max-width: 890px) {
    overflow: hidden;
    svg {
      width: 330px;
    }
  }
`;

export default AboutBrand;
