import styled from 'styled-components';
// import menu from '../img/menu.svg';
import { Link } from 'react-router-dom';
import MenuContainer from '../components/MenuContainer';
import Logo from '../components/Logo';
import LogoPink from '../components/LogoPink';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const Nav = ({ theme, toggletheme }) => {
  const { pathname } = useLocation();
  console.log(pathname);
  console.log(theme);
  const isLight = theme === 'light';
  return (
    <StyledNav>
      <div className="Bground">
        <div className="logo">
          <Link to="/">{isLight ? <Logo /> : <LogoPink />}</Link>
        </div>

        <ul>
          <li>
            <Link to="/work" onClick={toggletheme}>
              <h5>Work</h5>
            </Link>
            <Line
              transition={{ duration: 0.1 }}
              initial={{ width: '0%' }}
              animate={{ width: pathname === '/work' ? '100%' : '0' }}
            />
          </li>
          <li>
            <Link to="/about" theme={'test'}>
              <h5>About</h5>
            </Link>
            <Line
              transition={{ duration: 0.3 }}
              initial={{ width: '0%' }}
              animate={{ width: pathname === '/about' ? '100%' : '0' }}
            />
          </li>
          <li>
            <Link to="/news" onClick={toggletheme}>
              <h5>News</h5>
            </Link>
            <Line
              transition={{ duration: 0.3 }}
              initial={{ width: '0%' }}
              animate={{ width: pathname === '/news' ? '100%' : '0' }}
            />
          </li>
          <li>
            <Link to="/thinking" onClick={toggletheme}>
              <h5>Thinking</h5>
            </Link>
            <Line
              transition={{ duration: 0.3 }}
              initial={{ width: '0%' }}
              animate={{ width: pathname === '/thinking' ? '100%' : '0' }}
            />
          </li>
          <li>
            <Link to="/contact" onClick={toggletheme}>
              <h5>Contact</h5>
            </Link>
            <Line
              transition={{ duration: 0.3 }}
              initial={{ width: '0%' }}
              animate={{ width: pathname === '/contact' ? '100%' : '0' }}
            />
          </li>
        </ul>

        <div className="three">
          <MenuContainer />
        </div>
      </div>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  margin: 0 auto;
  padding: 0 5%;
  .Bground {
    min-height: 15vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0rem;
  }
  /* position: sticky;
  top: 0;
  z-index: 10; */
  a {
    font-size: 1.5rem;
    color: var(--color-font-black);
    text-transform: uppercase;
  }
  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex: 1 1 60%;
  }
  li {
    padding-left: 0rem;
    position: relative;
  }

  .logo {
    flex: 1 1 20%;
  }
  .logo img {
    width: 10rem;
  }
  .three {
    flex: 1 1 20%;
  }
`;

const Line = styled(motion.div)`
  height: 0.1rem;
  background: black;
  width: 50%;
  position: absolute;
  bottom: -30%;
  left: 0%;
`;

export default Nav;
