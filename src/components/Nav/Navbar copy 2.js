import styled from 'styled-components';
import Burger from './Burger';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo';
import LogoPink from '../../components/LogoPink';
import { useState } from 'react';
import RightNav from './RightNav';

//test
import { useInView } from 'react-intersection-observer';
// import { useAnimation } from 'framer-motion';

const Navbar = ({ theme, toggletheme }) => {
  const [open, setOpen] = useState(false);
  const isLight = theme === 'light';
  const class1 = 'test1';

  const [element, view] = useInView({ threshold: 0.5 });

  console.log(view);
  if (view) {
    console.log('show');
  } else {
    console.log('hide');
  }
  return (
    <Nav ref={element}>
      <div className={`logo ${class1}`}>
        <Link to="/">{isLight ? <Logo /> : <LogoPink />}</Link>
      </div>
      <Burger
        theme={theme}
        toggletheme={toggletheme}
        test={class1}
        open={open}
        setOpen={setOpen}
      />
      <RightNav
        open={open}
        setOpen={setOpen}
        theme={theme}
        toggletheme={toggletheme}
      />
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
  background: green;
  .logo {
    padding: 15px 0;
    width: 10rem;
    z-index: 555;
  }
  .logo img {
    width: 100%;
  }

  @media (max-width: 768px) {
    min-height: 10vh;
    padding: 0;
    .logo {
      position: fixed;
    }
    .test1 {
      background: red;
    }
    .test2 {
      background: ${({ theme }) => theme.body};
      padding: 2rem;
    }
  }
`;
export default Navbar;
