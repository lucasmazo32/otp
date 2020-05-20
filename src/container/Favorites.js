import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import showById from '../helper/showDataById';
import favoriteShows from '../helper/homeShows';
import showFilter from '../helper/filterHelper';
import allGenres from '../helper/allGenres';
import actions from '../actions/index';

const { addOption, clearOptions, changeFilter } = actions;

function Favorites({
  favorites, addOption, changeFilter, clearOptions, filter,
}) {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const showList = favoriteShows(showById, favorites);
    Object.keys(showList).forEach(show => {
      showList[show].then(result => {
        setShows(shows => [...shows, result]);
      });
    });
    clearOptions();
    changeFilter('All');
    allGenres(showList, addOption);
  }, [favorites]);

  return (
    <div className="container-xl movie-container">
      { showFilter(filter, shows) }
    </div>
  );
}

Favorites.propTypes = {
  favorites: PropTypes.arrayOf(PropTypes.any).isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
