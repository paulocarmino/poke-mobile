import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const barWidth = Dimensions.get('screen').width - 50;

export const TypesContainer = styled.View`
  flex-direction: column;
  margin-top: 0px;

  ${({ row }) =>
    row &&
    `
    flex-direction: row;
    margin-top: 5px;
  `};
`;

export const Label = styled.View`
  width: 60px;
  padding: 2px;
  margin-bottom: 3px;
  border-radius: 5px;

  background-color: ${({ color }) => (color ? color : '#666')};

  ${({ row }) =>
    row &&
    `
    width: 80px;
    padding: 4px;
    margin-right: 5px;
  `}
`;

export const Text = styled.Text`
  text-align: center;
  font-size: 12px;
  color: #fff;

  ${({ row }) =>
    row &&
    `
    font-size: 14px;
  `}
`;
