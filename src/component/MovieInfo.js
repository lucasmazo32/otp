import React, { useEffect, useState } from 'react';
import {
  useParams,
} from 'react-router-dom';
import showDataById from '../helper/showDataById';

export default function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState('');

  useEffect(() => {
    const movieInfo = showDataById(id);
    movieInfo.then(result => setMovie(result));
  }, [id]);

  return (
    <div className="container-xl">
      <h2>{ movie.Title }</h2>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <p>{`Plot: ${movie.Plot}`}</p>
      <p>{`Genre: ${movie.Genre}`}</p>
      <p>{`Type: ${movie.Type}`}</p>
      <p>{`Rated: ${movie.Rated}`}</p>
      <p>{`imbdRating: ${movie.imdbRating}`}</p>
    </div>
  );
}
