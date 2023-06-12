import React, { useState } from 'react';

const Search = ({ onSearch, onChange }) => {

  return (
    <div>
      <h4>Add more repos!</h4>
      Enter a github username: <input onChange={onChange}/>
      <button onClick={onSearch}> Add Repos </button>
    </div>
  );
}

export default Search;