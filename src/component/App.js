/* eslint-disable max-len */
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import MovieInfo from './MovieInfo';
import Nav from './Nav';
import Movies from '../container/Movies';
import Favorites from '../container/Favorites';
import Footer from './Footer';
import '../assets/style/app.css';

function App() {
  const [favorites, setFavorites] = useState(localStorage.getItem('favorites') !== '' && localStorage.getItem('favorites') !== null ? localStorage.getItem('favorites').split(',') : []);

  const addFav = id => {
    setFavorites(favorites => [...favorites, id]);
  };

  const remFav = id => {
    setFavorites(favorites => favorites.filter(favorite => favorite !== id));
  };

  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Movies />
        </Route>
        <Route exact path="/favorites">
          <Favorites favorites={favorites} />
        </Route>
        <Route path="/:id">
          <MovieInfo favorites={favorites} addFavorite={id => addFav(id)} removeFavorite={id => remFav(id)} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
