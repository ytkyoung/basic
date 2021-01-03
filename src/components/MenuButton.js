import React, { Component } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

class MenuButton extends Component {
  render() {
    const testVariants = {
      hidden: {
        opacity: 0,
        x: '100vw',
        y: -150,
        scale: 5,
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        transition: { delay: 0.3, type: 'spring', stiffness: 120 },
      },
    };
    const kreisVariants = {
      hidden: {
        opacity: 0,
        x: '-100vw',
        y: 150,
        scale: 5,
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        transition: { delay: 0.3, type: 'spring', stiffness: 120 },
      },
    };
    return (
      <TestStyle>
        <div onMouseDown={this.props.handleMouseDown}>
          <div className="roundButton">
            <div className="kreise">
              <motion.div
                className="kreis"
                variants={testVariants}
                initial="hidden"
                animate="visible"
              >
                ●
              </motion.div>
              <motion.div
                className="kreis"
                variants={testVariants}
                initial="hidden"
                animate="visible"
              >
                ●
              </motion.div>
              <motion.div
                className="kreis"
                variants={kreisVariants}
                initial="hidden"
                animate="visible"
              >
                ●
              </motion.div>
            </div>
          </div>
        </div>
      </TestStyle>
    );
  }
}

const TestStyle = styled.div`
  .roundButton {
    display: flex;
    justify-content: flex-end;
    background-color: #b91111;
  }
  .kreise {
    width: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #11b9b0;
  }
  .kreis {
    padding: 0.2rem;
    font-size: 0.8rem;
    color: yellow;
    transition: all 0.8s cubic-bezier(0, 1.26, 0.8, 1.28);
  }
  .kreise {
    transition: all 0.8s cubic-bezier(0, 1.26, 0.8, 1.28);
  }

  .kreise:hover {
    background-color: #96d9ff;
    cursor: pointer;
  }
  .kreise:hover .kreis:nth-child(2) {
    color: #1900ff;
    padding: 0rem 0.4rem;
  }
`;

export default MenuButton;
