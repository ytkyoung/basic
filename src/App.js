import React, { useState } from 'react';

// GLobal Styled
import GlobalStyle from './components/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { lighttheme, darktheme } from './theme';
//Import pages
import HomeStart from './pages/HomeStart';
import Nav from './components/Nav';
import Work from './pages/Work';
import About from './pages/About';
import News from './pages/News';
import Thinking from './pages/Thinking';
import Contact from './pages/Contact';
import ServicesDetail from './pages/ServicesDetail';
import Footer from './components/Footer';

import Krisel from './components/Krisel';

import { AnimatePresence } from 'framer-motion';

// Router
import { Switch, Route, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  console.log(location.pathname);
  const [theme, setTheme] = useState('light');
  const toggletheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  return (
    <div className="App">
      <ThemeProvider theme={theme === 'light' ? lighttheme : darktheme}>
        <GlobalStyle />

        <Nav theme={theme} toggletheme={toggletheme} />
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route path="/" exact>
              <HomeStart theme={theme} />
            </Route>
            <Route path="/work" exact>
              <Work />
            </Route>
            <Route path="/work/:id">
              <ServicesDetail />
            </Route>
            <Route path="/about">
              <About theme={theme} />
            </Route>
            <Route path="/News">
              <News theme={theme} />
            </Route>
            <Route path="/thinking">
              <Thinking theme={theme} />
            </Route>
            <Route path="/contact">
              <Contact theme={theme} />
            </Route>
          </Switch>
        </AnimatePresence>
        <Footer theme={theme} toggletheme={toggletheme} />

        <Krisel />
      </ThemeProvider>
    </div>
  );
}

export default App;
