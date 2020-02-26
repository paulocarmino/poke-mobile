import React from 'react';

import {
  Container,
  Title,
  ItemContainer,
  ItemTitle,
  ItemNumber,
  Bar,
} from './styles';
import Label from '~/components/Label';

export default function About({ route }) {
  const { pokemon } = route.params;

  return (
    <Container>
      <Title>Basic Stats</Title>
      <ItemContainer>
        <ItemTitle>HP</ItemTitle>
        <ItemNumber>{pokemon.stats.hp}</ItemNumber>
        <Bar color={pokemon.color_custom} value={pokemon.stats.hp * 0.5} />
      </ItemContainer>
      <ItemContainer>
        <ItemTitle>Attack</ItemTitle>
        <ItemNumber>{pokemon.stats.attack}</ItemNumber>
        <Bar color={pokemon.color_custom} value={pokemon.stats.attack * 0.5} />
      </ItemContainer>
      <ItemContainer>
        <ItemTitle>Defense</ItemTitle>
        <ItemNumber>{pokemon.stats.defense}</ItemNumber>
        <Bar color={pokemon.color_custom} value={pokemon.stats.defense * 0.5} />
      </ItemContainer>
      <ItemContainer>
        <ItemTitle>Sp. Atk</ItemTitle>
        <ItemNumber>{pokemon.stats.specialAttack}</ItemNumber>
        <Bar
          color={pokemon.color_custom}
          value={pokemon.stats.specialAttack * 0.5}
        />
      </ItemContainer>
      <ItemContainer>
        <ItemTitle>Sp. Def</ItemTitle>
        <ItemNumber>{pokemon.stats.specialDefense}</ItemNumber>
        <Bar
          color={pokemon.color_custom}
          value={pokemon.stats.specialDefense * 0.5}
        />
      </ItemContainer>
      <ItemContainer>
        <ItemTitle>Speed</ItemTitle>
        <ItemNumber>{pokemon.stats.speed}</ItemNumber>
        <Bar color={pokemon.color_custom} value={pokemon.stats.speed * 0.5} />
      </ItemContainer>
      <Title>Weaknesses</Title>
      <Label types={pokemon.weaknesses} row />
      <Title>Resistant</Title>
      <Label types={pokemon.resistant} row />
    </Container>
  );
}
