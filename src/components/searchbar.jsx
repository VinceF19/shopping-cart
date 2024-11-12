import React from 'react';

const SearchBar = ({ query, setQuery }) => {
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type here"
        className="border-2 rounded-lg p-2 border-pink-300"
        data-testid="search-text"
      />
    </div>
  );
};

export default SearchBar;
