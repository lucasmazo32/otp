/* eslint-disable array-callback-return */
import React from 'react';
import {
  Link,
  useHistory,
} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import showData from '../helper/showData';
import actions from '../actions/index';
import logo from '../assets/images/circle-logo.png';
import '../assets/style/nav.css';

const { changeFilter } = actions;

function Nav({ options, changeFilter }) {
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    const movie = showData(e.target[1].value);
    e.target[1].value = '';
    movie.then(movie => {
      if (movie.Response === 'True') {
        history.push(`/${movie.imdbID}`);
      }
    });
  };

  const handleChange = e => {
    changeFilter(e.target.value);
  };

  return (
    <nav>
      <img src={logo} alt="OneTrick Ponny logo" />
      <form onSubmit={handleSubmit}>
        <select onChange={handleChange}>
          { options.map(result => <option key={result}>{result}</option>) }
        </select>
        <input required type="text" placeholder="Movie/Series name..." />
      </form>
      <Link className="nav-links" to="/">Home</Link>
      <Link className="nav-links" to="/favorites">Favorites</Link>
    </nav>
  );
}

Nav.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  changeFilter: filter => dispatch(changeFilter(filter)),
});

const mapStateToProps = ({ optionsReducer: options }) => ({
  options,
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
