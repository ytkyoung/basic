import SctoGroteskABold from '../fonts/SctoGroteskA-Bold.woff2';
import SctoGroteskAMedium from '../fonts/SctoGroteskA-Medium.woff2';
import SctoGroteskARegular from '../fonts/SctoGroteskA-Regular.woff2';

import { createGlobalStyle } from 'styled-components';

// #f4f4f4 / #252422 / #f9cdcd

const GlobalStyle = createGlobalStyle`

:root {
  --color-font-black: #252422;
  --main-color: #252422;
  --secondary-color: #f9cdcd;
  --special-color: #f4f4f4;
  --special2-color: #252422;
  --line-height: 2.3rem;
  --font-bold: "Scto Grotesk A Bold";
  --font-medium: "Scto Grotesk A Medium";
  --font-regular: "Scto Grotesk A Regular";
  scroll-behavior: smooth;
}


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
    /* width: 90%; */
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: var(--font-regular);
    /* background: transparent; */
    overscroll-behavior: none;
    overflow-x: hidden;
    transition: all 0.25s linear;
  }
  button {
    background-color: transparent;
    color: ${({ theme }) => theme.text};
    padding: 10px 20px;
    text-align: center;
    display: inline-block;
    /* margin: 4px 2px; */
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.text};
    border-radius: 16px;
    transition: all 0.5s ease;
    outline:none;
    a{
      letter-spacing: 2px;
      text-transform: uppercase;
    }
    &:hover{
      background-color: ${({ theme }) => theme.text};
      color: ${({ theme }) => theme.button};
    }
    &:hover a{
      color: ${({ theme }) => theme.buttonHover};
    }
  }

  h1 {
    font-weight: medium;
    font-family: var(--font-bold);
    text-transform: uppercase;
    font-size: 12rem;
    line-height: 90%;
    color: ${({ theme }) => theme.text};
    @media (max-width: 1700px) {
      font-size: 9rem;
    }
  }

  h2 {
    font-size: 3rem;
    font-family: var(--font-bold);
    line-height: 90%;
    color: ${({ theme }) => theme.text};
  }
  h3 {
    font-size: 2rem;
    font-family: var(--font-regular);
  }
  h4 {
    font-size: 1.4rem;
    font-family: var(--font-regular);
    text-transform: uppercase;
    font-weight: 300;
  }
  h5 {
    font-size: 1.3rem;
    font-family: var(--font-regular);
    text-transform: uppercase;
    font-weight: 300;
  }

  a {
    font-size: 1.1rem;
    text-decoration: none;
    font-family: var(--font-regular);
    color: ${({ theme }) => theme.text}
  }

  ul {
    list-style: none;
  }

  span {
    font-weight: bold;
    color: ${({ theme }) => theme.text};
  }

  p {
    padding: 3rem 0rem;
    font-size: 1.8rem;
    line-height: 150%;
    color: ${({ theme }) => theme.text};
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
  position: fixed;
  top: 0;
  left: 0;
  transition: transform .3s
              cubic-bezier(0, .52, 0, 1);
  overflow: scroll;
  z-index: 1000;
  background: #252422;
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

::-moz-selection {
  color: #fff;
  background: var(--special2-color);
  text-shadow: none;
}

::selection {
  color: #fff;
  background: var(--special2-color);
  text-shadow: none;
}



`;

export default GlobalStyle;
