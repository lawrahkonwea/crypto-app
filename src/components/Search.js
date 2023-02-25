import PropTypes from 'prop-types';
import React from 'react';

const Search = ({ onSearch }) => {
  const header = 'Search Cyber Cash';
  return (
    <>
      <div className="input1">
        <h4 className="input-header">{header}</h4>
        <input className="input" type="search" onChange={onSearch} placeholder="$" />
      </div>
    </>

  );
};

Search.propTypes = {
  onSearch: PropTypes.func,
}.isRequired;

export default Search;
