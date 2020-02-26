import React, { useContext, useRef, useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { useQuery } from '@apollo/react-hooks';
import debounce from 'lodash/debounce';

import { Container, Text, SearchBar } from './styles';
import GridList from '~/components/GridList';
import { GET_ALL_POKEMONS } from '~/graphql/query';
import { SearchbarContext } from '~/contexts/Searchbar';

export default function Home({ navigation }) {
  const { searchbarBoolean } = useContext(SearchbarContext);
  const searchbarRef = useRef();
  const [searchText, setSearchText] = useState(''); // For searchbar input
  let [searchTextQuery, setSearchTextQuery] = useState(''); // For GraphQL query

  const { loading, error, data, variables } = useQuery(GET_ALL_POKEMONS, {
    variables: {
      where: {
        name_contains: searchTextQuery,
      },
    },
  });

  // Deboucing 'searchTextQuery' for GrapgQL Query
  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchTextQuery(searchText);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchText]);

  // Focus Searchbar when icon is clicked
  useEffect(() => {
    if (searchbarBoolean === true) {
      searchbarRef.current.focus();
    }
  }, [searchbarBoolean]);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :(</Text>;

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      {searchbarBoolean && (
        <SearchBar
          ref={searchbarRef}
          value={searchText}
          onChangeText={query => {
            setSearchText(query);
          }}
        />
      )}
      <GridList data={data.pokemons} navigation={navigation} />
    </Container>
  );
}
