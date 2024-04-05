import React, { useState, useEffect } from 'react';
import './SearchBar_test.css'; // Make sure this is correctly imported

const SearchBar_test = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('kg'); // Default unit
  const [searchResults, setSearchResults] = useState([]);

  const fetchSearchResults = (query, quantity, unit) => {
    // Simulate an API call with the query, quantity, and unit
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          `${quantity} ${unit} of ${query} found`,
          `${quantity} ${unit} of ${query} available`,
          `${quantity} ${unit} of ${query} in stock`,
        ]);
      }, 500);
    });
  };

  useEffect(() => {
    if (searchTerm && quantity && unit) {
      fetchSearchResults(searchTerm, quantity, unit).then((results) => {
        setSearchResults(results);
      });
    } else {
      setSearchResults([]);
    }
  }, [searchTerm, quantity, unit]);

  return (
    <div className="search-container">
      <div className="search-box">
        <input
          type="text"
          className="search-input"
          placeholder="Enter ingredient..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <input
          type="number"
          className="quantity-input"
          placeholder="Qty"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          min="1"
        />
        <select
          className="unit-select"
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
        >
          <option value="kg">Kilogram</option>
          <option value="g">Gram</option>
          <option value="mg">Milligram</option>
          <option value="l">Litre</option>
          <option value="ml">Millilitre</option>
        </select>
        <button className="search-button" onClick={() => console.log('Search button clicked')}>
          Search
        </button>
      </div>
      <div className="results-container">
        {searchResults.map((result, index) => (
          <div key={index} className="result-item">{result}</div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar_test;
