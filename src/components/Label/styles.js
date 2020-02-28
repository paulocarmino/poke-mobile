import styled from 'styled-components/native';

export const TypesContainer = styled.View`
  flex-direction: column;
  margin-top: 0px;

  ${({ row }) =>
    !!row &&
    `
    flex-direction: row;
    margin-top: 5px;
  `};
`;

export const ScrollView = styled.ScrollView``;

export const Label = styled.View`
  width: 60px;
  padding: 2px;
  margin-bottom: 3px;
  border-radius: 5px;

  background-color: ${({ color }) => (color ? color : '#666')};
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);

  ${({ row }) =>
    !!row &&
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
    !!row &&
    `
    font-size: 14px;
  `}
`;
