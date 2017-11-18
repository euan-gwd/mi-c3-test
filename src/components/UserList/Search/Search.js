import React from 'react';

const Search = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <label htmlFor="search">
        Filter by Name
        <input type="search" id="search" onChange={props.handleSearch} placeholder="Please enter full name" />
      </label>
      <input type="submit" value="Search" />
    </form>
  );
};

export default Search;
