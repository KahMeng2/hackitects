import React, { useState, useEffect } from 'react';
import "./SearchBar.css"
import { json } from 'react-router-dom';
//import { FaSearch } from "react-icons/fa";

//onSearch function: enter(input changes) -> search
//https://hitchhikers.yext.com/docs/search/searchbar-react-component/
function SearchBar({ OnSearch }) {
    //store the query value(string), setQuery function to update query(current input)
    const [query, setQuery] = useState('');
    //return the data from database(how to link to db?)
    const fetchData = (value) => {
        fetch()//db
        .then((response) => response.json())
        .then((json) => {
            const results = json.filter((user) => {
                return (
                    value &&
                    user &&
                    user.name &&
                    user.name.toLowerCase().includes(value)
                );
            });
            OnSearch(results);
            //console.log(results);
        });
    };

    useEffect(() => {
        if (query) {
            fetchData(query).then((results)) => {
                
            }

        }
    })

    const handleSearchClick = () => {
        if (OnSearch) {
            OnSearch(query);
        }
    };

    const handleSaveClick = () => {
        if (onSave)
    }
    //when user input the new value, update the query value and call the setQuery function
    const handleInputChange = (Event) => {
        //update the query value
        setQuery(Event.target.value);
        fetchData(Event.target.value)
        if (OnSearch) {
            //if onSearch funtion, do the new input
            OnSearch(Event.target.value)
        }

    };
    return (
        //return the search bar(<FaSearch id="search-icon" />)
        <div className="input-wrapper">
            <input
            
            type="search"

            name="search-form"

            id="search-form"

            className="search-input"

            placeholder="Search ingredences..."

            value={query}

            onChange={(e) => handleInputChange(e.target.value)}

            />
            {/* 'Search' button triggers search based on the current input value */}
            <button onClick={handleSearchClick}>Search</button>
            {/* 'Save' button can trigger a save action in the parent component */}
            <button onClick={handleSaveClick}>Save</button>

        </div>
    );

}

export default SearchBar






