import React, { useContext, useRef, useEffect, useState } from 'react';
import { StatusBar, View } from 'react-native';

import { Container, Text, SearchBar } from './styles';
import GridList from '~/components/GridList';

import { SearchbarContext } from '~/contexts/Searchbar';

export default function Home({ navigation }) {
  const { searchbarBoolean, setSearchbarQuery } = useContext(SearchbarContext);
  const searchbarRef = useRef();
  const [searchText, setSearchText] = useState(''); // For searchbar input

  // Deboucing 'searchTextQuery' for GrapgQL Query
  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchbarQuery(searchText);
    }, 250);

    return () => {
      clearTimeout(handler);
    };
  }, [searchText]);

  // Focus Searchbar when icon is clicked
  useEffect(() => {
    setSearchText('');
    if (searchbarBoolean === true) {
      searchbarRef.current.focus();
    }
  }, [searchbarBoolean]);

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      {searchbarBoolean ? (
        <SearchBar
          placeholder="Search for pokemon name"
          ref={searchbarRef}
          value={searchText}
          onChangeText={query => {
            setSearchText(query);
          }}
        />
      ) : (
        <View />
      )}
      <GridList navigation={navigation} />
    </Container>
  );
}
