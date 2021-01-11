import React, { useState } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';

import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';

import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import MovieDetail from './pages/MovieDetail';
import { MovieState } from './movieState';


function App() {
  const [movies, setMovies] = useState(MovieState);
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/work" exact>
            <OurWork movies={movies} />
          </Route>
          <Route path="/work/:id">
            <MovieDetail movies={movies}/>
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
