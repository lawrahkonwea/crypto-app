import PropTypes from 'prop-types';
import React from 'react';
import Navigation from './Navbar';

const Search = ({ onSearch }) => (
  <>
    <Navigation />
    <main>
      <input
        className="search-bar"
        type="text"
        name="searchItem"
        placeholder="search for a coin"
        onChange={onSearch}
      />
    </main>
  </>

);

Search.propTypes = {
  onSearch: PropTypes.func,
}.isRequired;

export default Search;
