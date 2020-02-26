import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;

  background-color: #fff;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  height: 210px;

  background-color: ${({ background }) => (background ? background : '#FFF')};
`;

export const TextContainer = styled.View`
  margin-left: 20px;
  padding-top: 5px;
`;

export const NumberText = styled.Text`
  color: #fff;
  font-size: 14px;
  letter-spacing: 2px;
`;

export const NameText = styled.Text`
  color: #fff;
  font-size: 28px;
  font-weight: 600;
`;

export const SpecieText = styled.Text`
  color: #fff;
  font-size: 15px;

  margin-bottom: 10px;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'stretch',
})`
  margin-right: 20px;

  width: 170px;
  height: 170px;
`;
