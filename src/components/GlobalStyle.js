import { createGlobalStyle } from 'styled-components';

import SctoGroteskABold from '../fonts/SctoGroteskA-Bold.woff2';
import SctoGroteskAMedium from '../fonts/SctoGroteskA-Medium.woff2';
import SctoGroteskARegular from '../fonts/SctoGroteskA-Regular.woff2';

// #f4f4f4 / #252422 / #f9cdcd

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
    scroll-behavior: smooth;
    /* @media (max-width: 1700px) {
      font-size: 80%;
    }
    @media (max-width: 1500px) {
      font-size: 80%;
    } */
  }

  body {
    /* width: 90%; */
    margin: 0 auto;
    padding: 0 5%;
    font-family: 'Scto Grotesk A Regular';
    background: transparent;
    overscroll-behavior: none;
    overflow-x: hidden;
  }
  button {
    background-color: transparent;
    border: none;
    color: black;
    padding: 10px 20px;
    text-align: center;
    display: inline-block;
    /* margin: 4px 2px; */
    cursor: pointer;
    border: 1px solid #252422;
    border-radius: 16px;
    transition: all 0.5s ease;
    outline:none;
    &:hover {
      background-color: #252422;
      color: white;
    }
  }

  h1 {
    font-weight: 700;
    font-family: 'Scto Grotesk A Medium';
    text-transform: uppercase;
    font-size: 12rem;
    line-height: 90%;
    @media (max-width: 1700px) {
      font-size: 9rem;
    }
  }

  h2 {
    font-size: 3rem;
    font-family: 'Scto Grotesk A Bold';
    line-height: 90%;
  }
  h3 {
    font-size: 2rem;
  }
  h4 {
    font-size: 1.6rem;
    font-family: 'Scto Grotesk A Regular';
    text-transform: uppercase;
  }
  h5 {
    font-size: 1.2rem;
    font-family: 'Scto Grotesk A Regular';
    text-transform: uppercase;
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
  input[type=text] {
    width: 35vw;
    padding: 12px 0px;
    margin: 8px 0;
    border: none;
    box-sizing: border-box;
    background: transparent;
    font-size: 2rem;
  }
  textarea:focus, input:focus{
    outline: none;
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
