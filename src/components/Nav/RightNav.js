import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import MenuContainer from '../../components/MenuContainer';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Logo from '../../components/Logo';
import LogoPink from '../../components/LogoPink';

const RightNav = (props) => {
  // console.log(props);
  const { open, setOpen } = props;
  const { pathname } = useLocation();

  const wrapperFunction = () => {
    setOpen(!open);
    props.toggletheme();
  };
  const isLight = props.theme === 'light';
  return (
    <NavStyle>
      <Ul open={open}>
        <div className="logoNav">
          <NavLink to="/" onClick={() => setOpen(!open)}>
            {isLight ? <Logo /> : <LogoPink />}
          </NavLink>
        </div>
        <ul className="menu">
          <li>
            <h2>
              <NavLink
                to="/work"
                onClick={() => setOpen(!open)}
                activeClassName="selected"
              >
                Work
              </NavLink>
              <Line
                transition={{ duration: 0.3 }}
                initial={{ width: '0%' }}
                animate={{ width: pathname === '/work' ? '100%' : '0' }}
              />
            </h2>
          </li>
          <li>
            <h2>
              <NavLink
                to="/about"
                onClick={wrapperFunction}
                activeClassName="selected"
              >
                About
              </NavLink>
              <Line
                transition={{ duration: 0.3 }}
                initial={{ width: '0%' }}
                animate={{ width: pathname === '/about' ? '100%' : '0' }}
              />
            </h2>
          </li>
          <li>
            <h2>
              <NavLink
                to="/news"
                onClick={wrapperFunction}
                activeClassName="selected"
              >
                News
              </NavLink>
              <Line
                transition={{ duration: 0.3 }}
                initial={{ width: '0%' }}
                animate={{ width: pathname === '/news' ? '100%' : '0' }}
              />
            </h2>
          </li>
          <li>
            <h2>
              <NavLink
                to="/thinking"
                onClick={wrapperFunction}
                activeClassName="selected"
              >
                Thinking
              </NavLink>
              <Line
                transition={{ duration: 0.3 }}
                initial={{ width: '0%' }}
                animate={{ width: pathname === '/thinking' ? '100%' : '0' }}
              />
            </h2>
          </li>
          <li>
            <h2>
              <NavLink
                to="/contact"
                onClick={wrapperFunction}
                activeClassName="selected"
              >
                Contact
              </NavLink>
              <Line
                transition={{ duration: 0.3 }}
                initial={{ width: '0%' }}
                animate={{ width: pathname === '/contact' ? '100%' : '0' }}
              />
            </h2>
          </li>
        </ul>
        <div className="three">
          <MenuContainer />
        </div>
      </Ul>
    </NavStyle>
  );
};
const NavStyle = styled.div`
  width: 80%;
  z-index: 30;

  h2 {
    font-size: 1.3rem;
    position: relative;
    width: 100%;
  }
  h2 > a {
    font-size: 1.3rem;
    color: ${({ theme }) => theme.text};
    text-transform: uppercase;
    z-index: 1;
  }

  h2 > a:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: -30%;
    left: 0;
    background: ${({ theme }) => theme.text};
    visibility: hidden;
    border-radius: 5px;
    transform: scaleX(0);
    transition: 0.25s linear;
  }
  h2 > a:hover:before,
  h2 > a:focus:before {
    visibility: visible;
    transform: scaleX(1);
  }
  a:hover {
    color: ${({ theme }) => theme.text};
  }

  @media (max-width: 768px) {
    .logoNav {
      width: 10rem;
      position: absolute;
      top: 3%;
      left: 10%;
    }
    .logoNav img {
      width: 100%;
    }
  }
`;

const Ul = styled.div`
  display: flex;
  position: relative;
  padding: 0;

  .menu {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex: 1 1 75%;
  }
  .three {
    flex: 1 1 25%;
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    background: ${({ theme }) => theme.nav};
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    padding-top: 18vh;
    transition: transform 0.3s ease-in-out;
    h2 > a:before {
      top: 30px;
      left: 0;
    }
    .menu {
      flex: 1 1 30%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
      width: 80%;
    }
    li {
      color: #fff;
      padding: 7% 0rem;
    }
    h2 > a {
      font-size: 3rem;
      color: ${({ theme }) => theme.text};
    }
    h2 > a:before {
      height: 2px;
    }
    .three {
      display: none;
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.1rem;
  width: 50%;
  position: absolute;
  bottom: -50%;
  left: 0%;
  background: ${({ theme }) => theme.text};
  @media (max-width: 768px) {
    height: 0.2rem;
  }
`;

export default RightNav;
