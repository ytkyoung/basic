import React, { useState } from 'react';
import styled from 'styled-components';
import RightNav from './RightNav';

const Burger = ({ theme, toggletheme, klasse }) => {
  const [open, setOpen] = useState(false);
  // console.log(klasse);
  // console.log('klasse');
  return (
    <>
      <div>
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
          <div />
          <div className={klasse}></div>
          <div />
        </StyledBurger>
      </div>
      <RightNav
        open={open}
        setOpen={setOpen}
        theme={theme}
        toggletheme={toggletheme}
      />
    </>
  );
};

const StyledBurger = styled.div`
  width: 3rem;
  height: 2.5rem;
  position: absolute;
  top: 3%;
  right: 7%;
  z-index: 333;
  display: none;
  background: transparent;
  border-radius: 3px;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    position: fixed;
    top: 2rem;
    background: ${({ theme }) => theme.navwrapper};

    padding: 0.3rem;
    .hallo {
      background: red;
    }
    .hallo2 {
      background: ${({ theme }) => theme.text};
    }
  }
  div {
    width: 2.2rem;
    height: 0.25rem;
    background-color: ${({ theme }) => theme.text};
    border-radius: 10px;
    transform-origin: 2px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

export default Burger;
