import React from 'react';

import { TypesContainer, Label, Text } from './styles';

const Types = ({ types }) => {
  return (
    <TypesContainer>
      {types.map((type, i) => (
        <Label key={i} color={type.color}>
          <Text>{type.name}</Text>
        </Label>
      ))}
    </TypesContainer>
  );
};

export default Types;
