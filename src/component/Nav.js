/* eslint-disable array-callback-return */
import React from 'react';
import {
  Link,
  useHistory,
} from 'react-router-dom';
import showData from '../helper/showData';
import '../assets/style/nav.css';

export default function Nav() {
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    const movie = showData(e.target[1].value);
    movie.then(movie => {
      if (movie.Response === 'True') {
        history.push(`/${movie.imdbID}`);
      }
    });
  };

  return (
    <nav>
      <form onSubmit={handleSubmit}>
        <select>
          <option>Comedy</option>
          <option>Romance</option>
        </select>
        <input type="text" />
      </form>
      <Link to="/">Home</Link>
    </nav>
  );
}
