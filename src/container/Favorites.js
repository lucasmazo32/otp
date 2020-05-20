import React from 'react';
import PropTypes from 'prop-types';

function Favorites({ favorites }) {
  console.log(favorites);
  return (
    <div>
      Hello World!
    </div>
  );
}

Favorites.propTypes = {
  favorites: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Favorites;
