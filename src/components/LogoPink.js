import logo from '../img/logo_pink.svg';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const LogoPink = () => {
  const buttonVariants = {
    hidden: {
      opacity: 0,
      //   x: '100vw',
      //   y: -150,
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
  .logo-box svg {
  }
`;

export default LogoPink;
