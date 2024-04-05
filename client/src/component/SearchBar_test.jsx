import React, { useState, useEffect } from 'react';
import "./SearchBar_test.css"
import { json } from 'react-router-dom';
import { SearchResultList } from './SearchResultList';
//import { FaSearch } from "react-icons/fa";

//onSearch function: enter(input changes) -> search
//https://hitchhikers.yext.com/docs/search/searchbar-react-component/

const Test = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [quantity, setQuantity] = useState('');
    const [unit, setUnit] = useState('kg'); // Default unit
    const [searchResults, setSearchResults] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]); 

    const mockData = [
        'beef',
        'beef mince',
        'beef stock',
        'chicken',
        'chicken breasts',
        'pork',
        'pork ribs'
      ];

    const handleSearchChange = async (e) => {
      const query = e.target.value;
      setSearchTerm(query);
      console.log(query)
      try {
        const response = await fetch(`http://localhost:3000/api/ingredients/autocomplete?name=${query}`);
        const data = await response.json();
        console.log(data)
        setSearchResults(data);
      } catch (error) {
        console.error('Error fetching autocomplete suggestions:', error);
      }
    };

    const handleSelectItem = (item) => {
        setSelectedItems((prevItems) => [...prevItems, item]);
        setSearchTerm("")
        setSearchResults([])
    };

    const handleRemoveItem = (itemToRemove) => {
        setSelectedItems((prevItems) => prevItems.filter(item => item !== itemToRemove));
    };
  
    ///const fetchSearchResults = (query, quantity, unit) => {
      // Simulate an API call with the query, quantity, and unit
      //return new Promise((resolve) => {
        //setTimeout(() => {
          //resolve([
            //`${quantity} ${unit} of ${query} found`,
            //`${quantity} ${unit} of ${query} available`,
            //`${quantity} ${unit} of ${query} in stock`,
          //]);
        //}, 500);
      //});
    //};
    
    //useEffect(() => {
      //if (searchTerm) {
        //setSearchResults(["",'',''])
        //console.log()
        
      //} else {
        //setSearchResults([]);
      //}
    //}, [searchTerm, quantity, unit]);
  
    return (
      <div className="search-container">
        <div className="search-box">
          <input
            type="text"
            className="results"
            placeholder="Enter ingredient..."
            value={searchTerm}
            //onChange={(e) => setSearchTerm(e.target.value)}
            onChange={handleSearchChange}
          />
        </div>
        {searchResults.length > 0 && (
          <div className="results-container">
            {searchResults.map((result, index) => (
              <div key={index} className="result-item" onClick={() => handleSelectItem(result)}>
                {result}
              </div>
            ))}
          </div>
        )}
        <div className="selected-items-container">
          {selectedItems.length > 0 && selectedItems.map((item, index) => (
            <div key={index} className="selected-item" onClick={() => handleRemoveItem(item)}>
              {item}
            </div>
          ))}
        </div>
        
        
      </div>
    );
  };

export default Test