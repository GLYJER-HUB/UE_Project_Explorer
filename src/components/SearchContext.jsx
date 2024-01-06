// SearchContext.js
import React, { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export const useSearchContext = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchChange = (input) => {
    setSearchInput(input);
  };

  return (
    <SearchContext.Provider value={{ searchInput, handleSearchChange }}>
      {children}
    </SearchContext.Provider>
  );
};
