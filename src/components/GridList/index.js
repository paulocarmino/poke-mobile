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

import { Chip } from 'react-native-paper';
import Label from '~/components/Label';

export default function GridList({ data }) {
  return (
    <Grid
      itemDimension={150}
      items={data}
      spacing={5}
      renderItem={({ item, index }) => (
        <ItemContainer backgroundColor={item.color_custom}>
          <InfoContainer>
            <TextsContainer>
              <ItemCode>{item.number}</ItemCode>
              <ItemName>{item.name}</ItemName>
            </TextsContainer>
            <Label types={item.types} />
          </InfoContainer>
          <Image source={{ uri: item.img }} />
        </ItemContainer>
      )}
    />
  );
}
