import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { Container, Text } from './styles';
import GridList from '~/components/GridList';
import { GET_ALL_POKEMONS } from '~/graphql/query';

export default function Home() {
  const { loading, error, data } = useQuery(GET_ALL_POKEMONS);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :(</Text>;

  console.tron.log(data);

  return (
    <Container>
      <GridList />
    </Container>
  );
}
