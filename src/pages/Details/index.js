import React from 'react';

import { Container } from './styles';

export default function Details({ navigation, route }) {
  const pokemon = route.params;
  navigation.setOptions({
    headerStyle: {
      backgroundColor: pokemon.color_custom,
      shadowColor: pokemon.color_custom,
    },
  });
  return <Container />;
}
