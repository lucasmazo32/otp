/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import homeShows from '../helper/homeShows';
import showFilter from '../helper/filterHelper';
import actions from '../actions/index';
import allGenres from '../helper/allGenres';
import showData from '../helper/showData';
import '../assets/style/movies.css';

const { addOption, clearOptions, changeFilter } = actions;

function Movies({
  addOption, clearOptions, filter, changeFilter,
}) {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const showList = homeShows(showData);
    Object.keys(showList).forEach(show => {
      showList[show].then(result => {
        setShows(shows => [...shows, result]);
      });
    });
    clearOptions();
    changeFilter('All');
    allGenres(showList, addOption);
  }, [addOption, clearOptions, changeFilter]);

  return (
    <div className="container-xl movie-container cont-b">
      { showFilter(filter, shows) }
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
