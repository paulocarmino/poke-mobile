import React from 'react';
import { setSaturation } from 'polished';

import {
  Container,
  Header,
  TextContainer,
  NumberText,
  NameText,
  SpecieText,
  Image,
} from './styles';
import Label from '~/components/Label';

export default function Details({ navigation, route }) {
  const pokemon = route.params;
  // Satura a cor em 0.5 para melhorar visualização. Quando o servidor de PRD estiver online, a imagem e a cor jã virão com satuação, devido ao upload com efeitos do Clodinary.
  const colorSatured = setSaturation('0.50', pokemon.color_custom);

  navigation.setOptions({
    headerStyle: {
      backgroundColor: colorSatured,
      shadowColor: colorSatured,
      elevation: 0,
    },
  });

  return (
    <Container>
      <Header background={colorSatured}>
        <TextContainer>
          <NumberText>{pokemon.number}</NumberText>
          <NameText>{pokemon.name}</NameText>
          <SpecieText>{pokemon.specie}</SpecieText>
          <Label types={pokemon.types} row />
        </TextContainer>
        <Image source={{ uri: pokemon.img }} />
      </Header>
    </Container>
  );
}
