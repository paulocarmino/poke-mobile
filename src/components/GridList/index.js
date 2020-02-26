import React from 'react';

import {
  Grid,
  ItemContainer,
  InfoContainer,
  TextsContainer,
  ItemName,
  ItemCode,
  Image,
} from './styles';

import { darken } from 'polished';
import Label from '~/components/Label';

export default function GridList({ data }) {
  return (
    <Grid
      itemDimension={150}
      items={data}
      spacing={5}
      renderItem={({ item, index }) => (
        <ItemContainer
          backgroundColor={item.color_custom}
          rippleColor={darken(0.1, item.color_custom)}
          onPress={() => console.log('Pressed')}
        >
          <>
            <InfoContainer>
              <TextsContainer>
                <ItemCode>{item.number}</ItemCode>
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
