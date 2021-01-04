import { IntroPlane } from '../styles';
import { motion } from 'framer-motion';
import { titleAnim, fade, titleDot } from '../animation';

const ThinkIntro = () => {
  return (
    <IntroPlane>
      <motion.div className="think-intro" variants={titleAnim}>
        <h2>THINKING</h2>
      </motion.div>
      <motion.div className="think-point" variants={(titleDot, fade)}>
        <h2>●</h2>
      </motion.div>
    </IntroPlane>
  );
};

export default ThinkIntro;
