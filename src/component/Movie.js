import React from 'react';
import PropTypes from 'prop-types';
import {
  useHistory,
} from 'react-router-dom';
import '../assets/style/movie.css';

export default function Movie({ title, image, movieID }) {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/${movieID}`);
  };

  return (
    <button className="movie" onClick={handleClick} type="button" style={{backgroundImage: `url(${image})`}}>
      <span>{ title }</span>
    </button>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  movieID: PropTypes.string.isRequired,
};
