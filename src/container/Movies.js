/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import homeShows from '../helper/homeShows';
import Movie from '../component/Movie';
import actions from '../actions/index';
import allGenres from '../helper/allGenres';
import '../assets/style/movies.css';

const { addOption, clearOptions, changeFilter } = actions;

function Movies({
  addOption, clearOptions, filter, changeFilter,
}) {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const showList = homeShows();
    Object.keys(showList).forEach(show => {
      showList[show].then(result => {
        setShows(shows => [...shows, result]);
      });
    });
    clearOptions();
    changeFilter('All');
    allGenres(showList, addOption);
  }, [addOption, clearOptions, changeFilter]);

  const showFilter = () => {
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

  return (
    <div className="container-xl movie-container">
      { showFilter() }
    </div>
  );
}

Movies.propTypes = {
  addOption: PropTypes.func.isRequired,
  clearOptions: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  addOption: option => dispatch(addOption(option)),
  clearOptions: () => dispatch(clearOptions()),
  changeFilter: filter => dispatch(changeFilter(filter)),
});

const mapStateToProps = ({ filterReducer: filter }) => ({
  filter,
});

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
