import React from 'react';

import { TypesContainer, Label, Text } from './styles';

const Types = ({ types, row }) => {
  return (
    <TypesContainer row={row}>
      {types.map((type, i) => (
        <Label row={row} key={i} color={type.color}>
          <Text row={row}>{type.name}</Text>
        </Label>
      ))}
    </TypesContainer>
  );
};

export default Types;
