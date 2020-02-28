import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;

  background-color: ${({ background }) => (background ? background : '#FFF')};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  height: 170px;
`;

export const TextContainer = styled.View`
  margin-left: 20px;
  padding-top: 5px;
`;

export const NumberText = styled.Text`
  color: #fff;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);
  font-size: 14px;
  letter-spacing: 2px;
`;

export const NameText = styled.Text`
  color: #fff;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);
  font-size: 28px;
  font-weight: 600;
`;

export const SpecieText = styled.Text`
  color: #fff;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);
  font-size: 15px;

  margin-bottom: 10px;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'stretch',
})`
  margin-right: 20px;

  width: 160px;
  height: 160px;
`;

export const DetailsContainer = styled.View`
  flex: 1;
  background-color: #fff;
  border-radius: 30px;

  margin-top: -30px;
  padding-top: 20px;
`;

export const FixBottomColor = styled.View`
  height: 35px;
  background-color: #fff;
`;
