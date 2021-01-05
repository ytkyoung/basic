import { IntroPlane } from '../styles';
import { motion } from 'framer-motion';
import { titleAnim, titleDot } from '../animation';

const ThinkIntro = () => {
  return (
    <IntroPlane>
      <motion.div className="think-intro" variants={titleAnim}>
        <h2>THINKING</h2>
      </motion.div>
      <motion.div className="think-point" variants={titleDot}>
        <h2>●</h2>
      </motion.div>
    </IntroPlane>
  );
};

export default ThinkIntro;
