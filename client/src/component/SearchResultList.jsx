import React from "react";

import "./SearchResultList.css";
import { SearchResult } from "./SearchResult";

export const SearchResultList = ({ results }) => {
    return (
        <div className="results-list">
        {results.map((result, id) => {
            return <SearchResult results={result} key={id} />;
        })}
        </div>
    );        
};