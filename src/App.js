// GLobal Styled
import GlobalStyle from './components/GlobalStyle';

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

import { AnimatePresence } from 'framer-motion';

// Router
import { Switch, Route, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <>
        <GlobalStyle />
        <Nav />
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route path="/" exact>
              <HomeStart />
            </Route>
            <Route path="/work" exact>
              <Work />
            </Route>
            <Route path="/work/:id">
              <ServicesDetail />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/News">
              <News />
            </Route>
            <Route path="/thinking">
              <Thinking />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </AnimatePresence>
        <Footer />
      </>
    </div>
  );
}

export default App;
