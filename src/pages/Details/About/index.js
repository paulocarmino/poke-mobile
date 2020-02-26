import React from 'react';

import {
  Container,
  Title,
  ItemContainer,
  ItemTitle,
  ItemContent,
} from './styles';

export default function About({ route }) {
  const { pokemon } = route.params;
  return (
    <Container>
      <Title>Description</Title>
      <ItemContent>{pokemon.description}</ItemContent>
      <Title>Details</Title>
      <ItemContainer>
        <ItemTitle>Specie</ItemTitle>
        <ItemContent>{pokemon.specie}</ItemContent>
      </ItemContainer>
      <ItemContainer>
        <ItemTitle>Height</ItemTitle>
        <ItemContent>{pokemon.height}</ItemContent>
      </ItemContainer>
      <ItemContainer>
        <ItemTitle>Weight</ItemTitle>
        <ItemContent>{pokemon.weight}</ItemContent>
      </ItemContainer>
      <Title>Breeding</Title>
      <ItemContent>Coming Soon!</ItemContent>
    </Container>
  );
}
