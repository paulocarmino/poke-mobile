import styled from 'styled-components/native';
import { FlatGrid } from 'react-native-super-grid';

export const Grid = styled(FlatGrid)`
  flex: 1;
`;

export const ItemContainer = styled.View`
  justify-content: space-between;
  flex-direction: row;
  height: 120px;

  border-radius: 5px;
  padding: 10px;

  background-color: ${props => props.backgroundColor};
`;

export const TextsContainer = styled.View``;

export const InfoContainer = styled.View`
  justify-content: space-between;
`;

export const ItemName = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: 600;
`;

export const ItemCode = styled.Text`
  font-size: 12px;
  color: #fff;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'stretch',
})`
  width: 90px;
`;
