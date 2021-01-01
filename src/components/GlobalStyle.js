import { createGlobalStyle } from 'styled-components';

import SctoGroteskABold from '../fonts/SctoGroteskA-Bold.woff2';
import SctoGroteskAMedium from '../fonts/SctoGroteskA-Medium.woff2';
import SctoGroteskARegular from '../fonts/SctoGroteskA-Regular.woff2';

const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  @font-face {
    font-family: 'Scto Grotesk A Bold';
    src: local('SctoGroteskA-Bold'), local('SctoGroteskA-Bold'),
    url(${SctoGroteskABold}) format('woff2'),
    }
  @font-face {
    font-family: 'Scto Grotesk A Medium';
    src: local('SctoGroteskA-Medium'), local('SctoGroteskA-Medium'),
    url(${SctoGroteskAMedium}) format('woff2'),
    }
  @font-face {
    font-family: 'Scto Grotesk A Regular';
    src: local('SctoGroteskA-Regular'), local('SctoGroteskA-Regular'),
    url(${SctoGroteskARegular}) format('woff2'),
    }


  html {
    font-size: 62.5%;
  }

  body {
    width: 90%;
    margin: 0 auto;
    font-family: 'Scto Grotesk A Regular';
    background: transparent;
    overscroll-behavior: none;
    overflow-x: hidden;
  }
  button {
    font-weight: bold;
    font-size: 1.1rem;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    color: white;
    transition: all 0.5s ease;
    &:hover {
      background-color: #23d997;
      color: white;
    }
  }

  h1 {
    font-weight: bold;
    font-size: 9rem;
    font-family: 'Scto Grotesk A Bold';
  }

  h2 {
    font-weight: lighter;
    font-size: 4rem;
    font-family: 'Scto Grotesk A Bold';
  }
  h3 {
    font-weight: lighter;
    font-size: 2rem;
  }
  h4 {
    font-weight: bold;
    font-size: 2rem;
  }

  a {
    font-size: 1.1rem;
    text-decoration: none;
  }
  ul {
    list-style: none;
  }

  span {
    font-weight: bold;
    color: #23d997;
  }

  p {
    padding: 3rem 0rem;
    font-size: 1.8rem;
    line-height: 150%;
  }

  #roundButton {
  background-color: #96D9FF;
  margin-bottom: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 10px solid #0065A6;
  outline: none;
  transition: all .2s cubic-bezier(0, 1.26, .8, 1.28);
}

#roundButton:hover {
  background-color: #96D9FF;
  cursor: pointer;
  border-color: #003557;
  transform: scale(1.2, 1.2);
}

#roundButton:active {
  border-color: #003557;
  background-color: #FFF;
}

#flyoutMenu {
  width: 100vw;
  height: 100vh;
  background-color: #FFE600;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform .3s
              cubic-bezier(0, .52, 0, 1);
  overflow: scroll;
  z-index: 1000;
}

#flyoutMenu.hide {
  transform: translate3d(100vw, 0, 0);
}

#flyoutMenu.show {
  transform: translate3d(0vw, 0, 0);
  overflow: hidden;
}

#flyoutMenu h2 a {
  color: #333;
  margin-left: 15px;
  text-decoration: none;
}

#flyoutMenu h2 a:hover {
  text-decoration: underline;
}
`;

export default GlobalStyle;
