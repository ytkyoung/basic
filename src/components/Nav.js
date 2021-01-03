import styled from 'styled-components';

// import menu from '../img/menu.svg';
import { Link } from 'react-router-dom';
import MenuContainer from '../components/MenuContainer';
import Logo from '../components/Logo';
const Nav = () => {
  return (
    <StyledNav>
      <div className="logo">
        <Link to="/">
          <Logo />
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
      </ul>

      <div className="three">
        <MenuContainer />
      </div>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 15vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0rem;
  /* background: yellow; */
  a {
    font-size: 1.5rem;
    color: #6d6d6d;
    text-transform: uppercase;
  }
  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex: 1 1 60%;
    background-color: #dbdbdb;
  }
  li {
    padding-left: 0rem;
    position: relative;
  }
  .logo {
    background-color: cyan;
    flex: 1 1 20%;
  }
  .logo img {
    width: 10rem;
  }
  .three {
    flex: 1 1 20%;
    background-color: red;
  }
`;

export default Nav;
