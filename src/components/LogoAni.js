import React from 'react';

import styled from 'styled-components';
import { motion } from 'framer-motion';

const textMotion = {
  rest: {
    color: 'grey',
    x: 0,
    transition: {
      duration: 1,
      type: 'tween',
      ease: 'easeIn',
    },
  },
  hover: {
    color: 'blue',
    x: 430,
    transition: {
      duration: 0.4,
      type: 'tween',
      ease: 'easeOut',
    },
  },
};

const slashMotion = {
  rest: { opacity: 0, ease: 'easeOut', duration: 0.2, type: 'tween' },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.4,
      type: 'tween',
      ease: 'easeIn',
    },
  },
};

const HoverTest = () => {
  const testColor = 'green';
  return (
    <Container initial="rest" whileHover="hover" animate="rest">
      <SlashContainer variants={slashMotion}>
        <svg
          width="103"
          height="119"
          viewBox="0 0 103 119"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0H61.05C87.67 0 98.61 12.12 98.61 29.76C98.61 40.94 91.23 52.06 81.4 56.81C93.78 60.88 102.51 71.05 102.51 83.35C102.51 105.9 86.4 118.71 58.76 118.71H0V0ZM50.87 23.76H32.22V49.18H50.87C62.07 49.18 67 44.6 67 36.46C67 28.32 62.75 23.76 50.87 23.76ZM52.57 69.55H32.22V94.97H53.42C65.29 94.97 70.42 90.56 70.42 82.25C70.38 73.76 65.29 69.53 52.57 69.53V69.55Z"
            fill={testColor}
          />
        </svg>
      </SlashContainer>

      <motion.div className="logo" variants={textMotion}>
        <svg
          width="50"
          height="56"
          viewBox="0 0 103 119"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0H61.05C87.67 0 98.61 12.12 98.61 29.76C98.61 40.94 91.23 52.06 81.4 56.81C93.78 60.88 102.51 71.05 102.51 83.35C102.51 105.9 86.4 118.71 58.76 118.71H0V0ZM50.87 23.76H32.22V49.18H50.87C62.07 49.18 67 44.6 67 36.46C67 28.32 62.75 23.76 50.87 23.76ZM52.57 69.55H32.22V94.97H53.42C65.29 94.97 70.42 90.56 70.42 82.25C70.38 73.76 65.29 69.53 52.57 69.53V69.55Z"
            fill={testColor}
          />
        </svg>
      </motion.div>
    </Container>
  );
};
export default HoverTest;

const Container = styled(motion.div)`
  position: relative;
  max-width: 10%;
  cursor: pointer;
`;

const SlashContainer = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 0;
  opacity: 0;

  transform: translateY(-50%);

  svg {
    width: auto;
    height: 100%;
    object-fit: scale-down;
  }
`;
