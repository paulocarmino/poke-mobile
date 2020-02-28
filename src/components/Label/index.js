import React from 'react';

import { TypesContainer, Label, Text, ScrollView } from './styles';

const Types = ({ types, row, scrollEnabled }) => {
  const horizontal = row ? true : false;
  return (
    <TypesContainer row={row}>
      <ScrollView
        horizontal={horizontal}
        scrollEnabled={scrollEnabled}
        showsHorizontalScrollIndicator={false}
      >
        {types.map((type, i) => (
          <Label row={row} key={i} color={type.color}>
            <Text row={row}>{type.name}</Text>
          </Label>
        ))}
      </ScrollView>
    </TypesContainer>
  );
};

export default Types;
