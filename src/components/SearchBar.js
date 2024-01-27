import React, { useState } from 'react';
import axios from 'axios';

function SearchBar({ setBooks }) {
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
      setBooks(response.data.items);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div className="search-bar">
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search for books" />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
