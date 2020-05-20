import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import MovieInfo from './MovieInfo';
import Nav from './Nav';
import Movies from '../container/Movies';

export default function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Movies />
        </Route>
        <Route path="/:id">
          <MovieInfo />
        </Route>
      </Switch>
    </Router>
  );
}
