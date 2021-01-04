import styled from 'styled-components';
import { IntroPlane } from '../styles.js';
import { motion } from 'framer-motion';
import { titleAnim, fade, titleDot } from '../animation';

const NewsIntro = () => {
  return (
    <NewsIntroStyle>
      <motion.div className="news-intro" variants={titleAnim}>
        <h2>News</h2>
      </motion.div>
      <motion.div className="news-point" variants={(titleDot, fade)}>
        <h2>●</h2>
      </motion.div>
    </NewsIntroStyle>
  );
};

const NewsIntroStyle = styled(IntroPlane)``;

export default NewsIntro;
