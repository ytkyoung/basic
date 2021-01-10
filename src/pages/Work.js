import WorkIntro from '../components/WorkIntro';
import WorkServices from '../components/WorkServices';
import ScrollTop from '../components/ScrollTop';
//Animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
import styled from 'styled-components';

const Work = () => {
  return (
    <WorkSection>
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
    </WorkSection>
  );
};

const WorkSection = styled.section`
  margin: 0 auto;
  padding: 0 5%;
`;
// margin: 0 auto;
// padding: 0 5%;
export default Work;
