/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import homeShows from '../helper/homeShows';
import Movie from '../component/Movie';
import '../assets/style/movies.css';

export default function Movies() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const showList = homeShows();
    Object.keys(showList).forEach(show => {
      showList[show].then(result => {
        setShows(shows => [...shows, <Movie key={result.imdbID} title={result.Title} image={result.Poster} movieID={result.imdbID} />]);
      });
    });
  }, []);

  return (
    <div className="container-xl movie-container">
      { shows.map(show => show) }
    </div>
  );
}
