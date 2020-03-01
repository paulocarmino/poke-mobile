import React from 'react';
import { Platform, View } from 'react-native';

import {
  Container,
  Header,
  TextContainer,
  NumberText,
  NameText,
  SpecieText,
  Image,
  DetailsContainer,
  FixBottomColor,
} from './styles';
import Label from '~/components/Label';
import DetailsTabs from './Tabs';

export default function Details({ navigation, route }) {
  const pokemon = route.params;

  navigation.setOptions({
    headerStyle: {
      backgroundColor: pokemon.color_custom,
      shadowColor: pokemon.color_custom,
      elevation: 0,
    },
  });

  return (
    <>
      <Container background={pokemon.color_custom}>
        <Header>
          <TextContainer>
            <NumberText>{pokemon.number}</NumberText>
            <NameText>{pokemon.name}</NameText>
            <SpecieText>{pokemon.specie}</SpecieText>
            <Label types={pokemon.types} row scrollEnabled={false} />
          </TextContainer>
          <Image source={{ uri: pokemon.img_custom }} style={{ zIndex: 10 }} />
        </Header>
        <DetailsContainer style={{ zIndex: -1 }}>
          <DetailsTabs color={pokemon.color_custom} pokemon={pokemon} />
        </DetailsContainer>
      </Container>
      {Platform.OS === 'ios' ? <FixBottomColor /> : <View />}
    </>
  );
}
