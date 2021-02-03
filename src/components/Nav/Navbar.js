import styled from 'styled-components';
import Burger from './Burger';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo';
import LogoPink from '../../components/LogoPink';
import { useState, useEffect } from 'react';
// import RightNav from './RightNav';

const Navbar = ({ theme, toggletheme }) => {
  const [open, setOpen] = useState(false);
  const isLight = theme === 'light';
  const [pos, setPos] = useState('top');
  useEffect(() => {
    document.addEventListener('scroll', (e) => {
      let scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 100) {
        setPos('moved');
      } else {
        setPos('top');
      }
    });
  }, []);
  const class1 = pos === 'top' ? 'yo' : 'yo2';
  const class2 = pos === 'top' ? 'hallo' : 'hallo2';
  return (
    <Nav>
      <div className={`logo ${class1}`}>
        <Link to="/">{isLight ? <Logo /> : <LogoPink />}</Link>
      </div>
      <Burger
        theme={theme}
        toggletheme={toggletheme}
        klasse={class2}
        open={open}
        setOpen={setOpen}
      />
      {/* <RightNav
        open={open}
        setOpen={setOpen}
        theme={theme}
        toggletheme={toggletheme}
      /> */}
    </Nav>
  );
};

const Nav = styled.nav`
  min-height: 15vh;
  width: 90%;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  .logo {
    width: 10rem;
    z-index: 10;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  .logo img {
    width: 100%;
  }

  @media (max-width: 768px) {
    min-height: 10vh;
    padding: 0;
    .logo {
      position: absolute;
      top: 3%;
      left: 5%;
    }
    .yo {
      background: transparent;
    }
    .yo2 {
      background: ${({ theme }) => theme.navwrapper};
      padding: 2rem;
    }
  }
`;
export default Navbar;
