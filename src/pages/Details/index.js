import React from 'react';
import { setSaturation } from 'polished';
import { Platform } from 'react-native';

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
  // Satura a cor em 0.5 para melhorar visualização. Quando o servidor de PRD estiver online, a imagem e a cor jã virão com satuação, devido ao upload com efeitos do Clodinary.
  const colorSatured = setSaturation('0.65', pokemon.color_custom);

  navigation.setOptions({
    headerStyle: {
      backgroundColor: colorSatured,
      shadowColor: colorSatured,
      elevation: 0,
    },
  });

  return (
    <>
      <Container background={colorSatured}>
        <Header>
          <TextContainer>
            <NumberText>{pokemon.number}</NumberText>
            <NameText>{pokemon.name}</NameText>
            <SpecieText>{pokemon.specie}</SpecieText>
            <Label types={pokemon.types} row />
          </TextContainer>
          <Image source={{ uri: pokemon.img }} style={{ zIndex: 10 }} />
        </Header>
        <DetailsContainer style={{ zIndex: -1 }}>
          <DetailsTabs color={colorSatured} />
        </DetailsContainer>
      </Container>
      {Platform.OS === 'ios' && <FixBottomColor />}
    </>
  );
}
