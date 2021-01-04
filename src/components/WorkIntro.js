import { Intro } from '../styles.js';
import { motion } from 'framer-motion';
import { titleAnim, fade, titleDot } from '../animation';

const WorkIntro = () => {
  return (
    <>
      <Intro>
        <div>
          <motion.h1 variants={titleAnim}>EASY TO UNDERSTAND.</motion.h1>
          <motion.h1 variants={titleDot}>●IMPOSSIBLE</motion.h1>
          <motion.h1 variants={titleAnim}>TO IGNORE.</motion.h1>
        </div>
        <div className="work-intro-title-part2">
          <motion.p variants={fade}>
            The work we create lives at the intersection of clarity and surprise
            and positions brands in culture through shared values and ideals.
          </motion.p>
        </div>
      </Intro>
    </>
  );
};

export default WorkIntro;
