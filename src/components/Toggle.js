import React from 'react';
import { func, string } from 'prop-types';
import styled from 'styled-components';

const ToggleContainer = styled.button`
  position: relative;
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.gradient};
  width: 2rem;
  height: 2rem;
  margin: 0 auto;
  border-radius: 30px;
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  font-size: 0.5rem;
  padding: 0.5rem;
  overflow: hidden;
  cursor: pointer;

  svg {
    width: 2.5rem;
    height: auto;
    transition: all 0.3s linear;

    &:first-child {
      transform: ${({ lighttheme }) =>
        lighttheme ? 'translateY(0)' : 'translateY(100px)'};
    }

    &:nth-child(2) {
      transform: ${({ lighttheme }) =>
        lighttheme ? 'translateY(-100px)' : 'translateY(0)'};
    }
  }
`;

const Toggle = ({ theme, toggletheme }) => {
  const isLight = theme === 'light';

  return (
    <ToggleContainer
      lighttheme={isLight}
      theme={theme}
      toggletheme={toggletheme}
      onClick={toggletheme}
    >
      <h4>i</h4>
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  toggletheme: func.isRequired,
  theme: string.isRequired,
};

export default Toggle;
