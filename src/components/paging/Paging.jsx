import React from 'react';
import PropTypes from 'prop-types';
const Paging = ({ page, onClick }) => {
  return (
    <>
      <button onClick={() => onClick(-1)}>Prev</button>
      <p>{page}</p>
      <button onClick={() => onClick(1)}>Next</button>
    </>
  );
};

Paging.propTypes = {
  page: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Paging;
