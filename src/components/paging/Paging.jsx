import React from 'react';
import PropTypes from 'prop-types';
const Paging = ({ page, characterLength, onClick }) => {
  return (
    <>
      <button 
        disabled={page <= 1} 
        onClick={() => onClick(-1)}>
        Prev</button>
      <p>{page}</p>
      <button 
        disabled={characterLength < 20}
        onClick={() => onClick(1)}>
      Next</button>
    </>
  );
};

Paging.propTypes = {
  page: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  characterLength: PropTypes.number.isRequired
};

export default Paging;
