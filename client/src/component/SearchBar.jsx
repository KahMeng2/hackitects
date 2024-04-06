import React, { useState, useEffect } from 'react';
import "./SearchBar.css"
import { SearchResultList } from './SearchResultList';
//import { FaSearch } from "react-icons/fa";

//onSearch function: enter(input changes) -> search
//https://hitchhikers.yext.com/docs/search/searchbar-react-component/

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [quantity, setQuantity] = useState('');
    const [unit, setUnit] = useState('kg'); // Default unit
    const [searchResults, setSearchResults] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]); 

    const styles = {
      inputBar : {
        backgroundColor: "#E2EAF0", 
        color: "#7090A8", 
        borderWidth: "0px", 
        fontFamily: "Readex Pro", 
        fontSize: 24
      },
      title: {
        color: '#7090A8',
        fontFamily: 'Readex Pro',
        fontSize: 18,
        marginLeft: "20px"
      }
    }

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
      let cancel = false
      try {
        const response = await fetch(`http://localhost:3000/api/ingredients/autocomplete?name=${query}`);
        const data = await response.json();
        if (cancel) return
        console.log(data)
        setSearchResults(data);
      } catch (error) {
        console.error('Error fetching autocomplete suggestions:', error);
      }
      return () => (cancel = true);
    };

    const handleSelectItem = (item) => {
        setSelectedItems((prevItems) => [...prevItems, item]);
        setSearchTerm("")
        setSearchResults([])
    };

    const handleRemoveItem = (itemToRemove) => {
        setSelectedItems((prevItems) => prevItems.filter(item => item !== itemToRemove));
    };
  
    return (
      <div className="search-container">
        <div className="search-box">
          <input
            type="text"
            className="search-input"
            placeholder="Enter ingredients..."
            value={searchTerm}
            onChange={handleSearchChange}
            style={styles.inputBar}
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
        <div className="selected-items-container" style={{visibility: selectedItems.length > 0 ? 'visible' : 'hidden' }}>
          {selectedItems.length > 0 && selectedItems.map((item, index) => (
            <div key={index} className="selected-item-row">
              <div className="selected-item input-group gap-4">
                <div className="chosen p-1">
                  {item}
                </div>
                <input type="text" 
                      className="form-control" 
                      placeholder="Volume (kgs)" 
                      aria-label="Recipient's username" 
                      aria-describedby="basic-addon2" 
                      style={{width:'30px', fontSize:'12px', fontFamily: "Readex Pro"}}/>
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary" type="button" onClick={() => handleRemoveItem(item)}>Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      
      </div>
    );
  };

export default SearchBar