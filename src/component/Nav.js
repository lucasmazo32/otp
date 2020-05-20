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
import '../assets/style/nav.css';

const { changeFilter } = actions;

function Nav({ options, changeFilter }) {
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

  const handleChange = e => {
    changeFilter(e.target.value);
  };

  return (
    <nav>
      <form onSubmit={handleSubmit}>
        <select onChange={handleChange}>
          { options.map(result => <option key={result}>{result}</option>) }
        </select>
        <input type="text" />
      </form>
      <Link to="/">Home</Link>
      <Link to="/favorites">Favorites</Link>
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
