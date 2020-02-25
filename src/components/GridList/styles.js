import styled from 'styled-components/native';
import { FlatGrid } from 'react-native-super-grid';

export const Grid = styled(FlatGrid)`
  flex: 1;
`;

export const ItemContainer = styled.View`
  justify-content: flex-end;
  height: 140px;

  border-radius: 5px;
  padding: 10px;

  background-color: ${props => props.backgroundColor};
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
