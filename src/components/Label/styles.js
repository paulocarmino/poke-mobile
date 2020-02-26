import styled from 'styled-components/native';

export const TypesContainer = styled.View`
  flex-direction: column;
  margin-top: 0px;
`;

export const Label = styled.View`
  width: 60px;
  padding: 2px 6px;
  margin-bottom: 3px;
  border-radius: 5px;
  font-size: 12px;

  background-color: ${({ color }) => (color ? color : '#666')};
`;

export const Text = styled.Text`
  text-align: center;
  font-size: 12px;
  color: #fff;
`;
