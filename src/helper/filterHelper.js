/* eslint-disable max-len */
import React from 'react';
import Movie from '../component/Movie';

const showFilter = (filter, shows) => {
  if (filter === 'All') {
    return shows.map(show => <Movie key={show.imdbID} title={show.Title} image={show.Poster} movieID={show.imdbID} />);
  }
  return shows.map(show => {
    if (show.Genre.split(', ').includes(filter)) {
      return <Movie key={show.imdbID} title={show.Title} image={show.Poster} movieID={show.imdbID} />;
    }
    return null;
  });
};

export default showFilter;
