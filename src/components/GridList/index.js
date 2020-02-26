import React from 'react';

import {
  Grid,
  ItemContainer,
  InfoContainer,
  TextsContainer,
  ItemName,
  ItemNumber,
  Image,
} from './styles';

import { darken, setSaturation } from 'polished';
import Label from '~/components/Label';

export default function GridList({ data, navigation }) {
  return (
    <Grid
      itemDimension={150}
      items={data}
      spacing={5}
      renderItem={({ item, index }) => (
        <ItemContainer
          // Satura a cor em 0.5 para melhorar visualização. Quando o servidor de PRD estiver online, a imagem e a cor jã virão com satuação, devido ao upload com efeitos do Clodinary.
          backgroundColor={setSaturation('0.50', item.color_custom)}
          rippleColor={darken(0.1, item.color_custom)}
          onPress={() => navigation.navigate('Details', item)}
        >
          <>
            <InfoContainer>
              <TextsContainer>
                <ItemNumber>{item.number}</ItemNumber>
                <ItemName>{item.name}</ItemName>
              </TextsContainer>
              <Label types={item.types} />
            </InfoContainer>
            <Image source={{ uri: item.img }} />
          </>
        </ItemContainer>
      )}
    />
  );
}
