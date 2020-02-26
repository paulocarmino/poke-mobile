import React, { useContext, useRef, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { useQuery } from '@apollo/react-hooks';

import { Container, Text, SearchBar } from './styles';
import GridList from '~/components/GridList';
import { GET_ALL_POKEMONS } from '~/graphql/query';
import { SearchbarContext } from '~/contexts/Searchbar';

export default function Home({ navigation }) {
  const { loading, error, data } = useQuery(GET_ALL_POKEMONS);
  const { searchbarBoolean, searchbarQuery, setSearchbarQuery } = useContext(
    SearchbarContext
  );
  const searchbarRef = useRef();

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
          value={searchbarQuery}
          onChangeText={query => {
            setSearchbarQuery(query);
          }}
        />
      )}
      <GridList data={data.pokemons} navigation={navigation} />
    </Container>
  );
}
