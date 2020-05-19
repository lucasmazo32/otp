import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Movie from './Movie';
import Nav from './Nav';
import Movies from './Movies';

export default function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Movies />
        </Route>
        <Route path="/:id">
          <Movie />
        </Route>
      </Switch>
    </Router>
  );
}
