import React from 'react';
import PropTypes from 'prop-types';
const CharacterItem = ({ name, species, status, image }) => {
  return (
    <figure>
      <img src={image} alt={name} />
      <figcaption>
        <h2>{name}</h2>
        <p>{species}</p>
        <p>{status}</p>
      </figcaption>
    </figure>
  );
};

CharacterItem.propTypes = {
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};
