import React, { createContext, useState } from 'react';

export const SearchbarContext = createContext();

function SearchbarProvider({ children }) {
  const [searchbarBoolean, setSearchbarBoolean] = useState(false);
  const [searchbarQuery, setSearchbarQuery] = useState('');

  const toggleSearchbar = () => {
    setSearchbarBoolean(!searchbarBoolean);
  };

  return (
    <SearchbarContext.Provider
      value={{
        searchbarBoolean,
        toggleSearchbar,
        searchbarQuery,
        setSearchbarQuery,
      }}
    >
      {children}
    </SearchbarContext.Provider>
  );
}

export default SearchbarProvider;
