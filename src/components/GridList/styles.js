import styled from 'styled-components/native';
import { FlatGrid } from 'react-native-super-grid';
import { TouchableRipple } from 'react-native-paper';

export const Grid = styled(FlatGrid)`
  flex: 1;
`;

export const ItemContainer = styled(TouchableRipple)`
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
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);
  font-weight: 600;
`;

export const ItemNumber = styled.Text`
  font-size: 12px;
  color: #fff;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);
  letter-spacing: 1px;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'stretch',
})`
  width: 90px;
  box-shadow: 0px -1px 2px rgba(0, 0, 0, 0.3);
`;

export const Text = styled.Text`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const LoadingContainer = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
