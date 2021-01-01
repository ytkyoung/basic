import styled from 'styled-components';
import logo from '../img/logo.svg';
// import menu from '../img/menu.svg';
import { Link } from 'react-router-dom';
import MenuContainer from '../components/MenuContainer';

const Nav = () => {
  return (
    <StyledNav>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo basic" />
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/work">Work</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/news">News</Link>
        </li>
        <li>
          <Link to="/thinking">Thinking</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/test">TEST</Link>
        </li>
      </ul>
      <DreiPunkteStyle>
        <MenuContainer />
      </DreiPunkteStyle>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0rem;
  /* background: yellow; */
  a {
    font-size: 3rem;
    color: red;
  }
  ul {
    display: flex;
    background-color: blue;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
  .logo {
    background-color: cyan;
  }
  .logo img {
    width: 100%;
  }
`;

const DreiPunkteStyle = styled.div`
  background-color: yellow;
  a {
    display: flex;
    justify-content: flex-end;
    background-color: green;
  }
  img {
    background-color: red;
    width: 100%;
  }
  #theMenu {
    position: fixed;
    left: 0;
    top: 0;
    transform: translate3d(-100vw, 0, 0);

    width: 100vw;
    height: 100vh;
  }
`;
export default Nav;
