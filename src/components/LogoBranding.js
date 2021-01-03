import logo from '../img/branding-img.svg';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const LogoBranding = () => {
  const buttonVariants = {
    hidden: {
      opacity: 0,
      scale: 5,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: [1, 0.9, 1],
      originX: 0,
    },
    hover: {
      scale: 1.1,
      originX: 0,
      transition: {
        duration: 0.3,
        repeat: 1,
        repeatType: 'reverse',
      },
    },
  };

  return (
    <TestStyle>
      <motion.div
        className="logo-box"
        variants={buttonVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        transition={{
          delay: 0.1,
          type: 'tween',
          stiffness: 120,
        }}
      >
        <img src={logo} alt="logo basic" />
      </motion.div>
    </TestStyle>
  );
};

const TestStyle = styled.div`
  width: 50%;
  .logo-box img {
    width: 100%;
  }
`;

export default LogoBranding;
