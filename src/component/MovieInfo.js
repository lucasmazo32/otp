/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import {
  useParams,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import showDataById from '../helper/showDataById';
import '../assets/style/movieInfo.css';

function Movie({ addFavorite, removeFavorite, favorites }) {
  const { id } = useParams();
  const [movie, setMovie] = useState('');

  useEffect(() => {
    const movieInfo = showDataById(id);
    movieInfo.then(result => setMovie(result));
  }, [id]);

  useEffect(() => {
    localStorage.setItem('favorites', favorites);
  }, [favorites]);

  const handleChange = e => {
    if (e.target.checked) {
      addFavorite(id);
    } else {
      removeFavorite(id);
    }
  };

  return (
    <div className="container-xl">
      <h2>{ movie.Title }</h2>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <p>{`Plot: ${movie.Plot}`}</p>
      <p>{`Genre: ${movie.Genre}`}</p>
      <p>{`Type: ${movie.Type}`}</p>
      <p>{`Rated: ${movie.Rated}`}</p>
      <p>{`imbdRating: ${movie.imdbRating}`}</p>
      <span>Add/Remove from favorites:&nbsp;</span>
      <input onChange={handleChange} type="checkbox" id="favorite" checked={favorites.includes(id)} />
      <label htmlFor="favorite" className="fas fa-star"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" /></svg></label>
    </div>
  );
}

Movie.propTypes = {
  addFavorite: PropTypes.func.isRequired,
  removeFavorite: PropTypes.func.isRequired,
  favorites: PropTypes.arrayOf(PropTypes.any).isRequired,
};


export default Movie;
