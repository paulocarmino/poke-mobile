import styled from 'styled-components/native';
// import { Drawer as PDrawer } from 'react-native-paper';

export const Container = styled.SafeAreaView`
  flex: 1;

  justify-content: space-between;
  /* background-color: #fff; */
`;

export const Logo = styled.Image.attrs({
  source: require('@assets/logo-drawer.png'),
  resizeMode: 'stretch',
})`
  width: 170px;
  height: 45px;
  margin-left: 20px;
  margin-bottom: 20px;
  margin-top: ${Platform.OS === 'android' ? '36px' : '10px'};
`;

export const TextsContainers = styled.ScrollView`
  flex: 1;

  margin-left: 20px;
  margin-right: 20px;
`;

export const Text = styled.Text`
  color: #3e3e3e;
  margin-top: 5px;
  margin-bottom: 2px;
`;

export const TextStrong = styled.Text`
  color: #3e3e3e;
  margin-top: 5px;
  margin-bottom: 2px;

  font-weight: 700;
`;

export const PhoneIcon = styled.Image.attrs({
  source: require('@assets/smartphone.png'),
  resizeMode: 'contain',
})`
  width: 10px;
  height: 14px;
  margin-left: 5px;
`;

export const ApiIcon = styled.Image.attrs({
  source: require('@assets/fight.png'),
  resizeMode: 'contain',
})`
  width: 16px;
  height: 16px;
  margin-left: 5px;
  margin-right: 5px;
`;

export const PlayerIcon = styled.Image.attrs({
  source: require('@assets/player.png'),
  resizeMode: 'contain',
})`
  width: 16px;
  height: 20px;
  /* margin-left: 10px; */
  margin-right: 5px;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;

  margin-top: 15px;
  margin-bottom: 10px;
`;

export const TitleIcon = styled.Image.attrs({
  source: require('@assets/bracelet.png'),
  resizeMode: 'contain',
})`
  width: 17px;
  height: 37px;
  margin-right: 10px;
`;

export const TitleText = styled.Text`
  color: #3e3e3e;
  font-weight: 700;
`;

export const TextMarginLeft = styled.Text`
  color: #3e3e3e;

  margin-left: 8px;
  margin-bottom: 7px;
`;

export const GotchaIcon = styled.Image.attrs({
  source: require('@assets/gotcha.png'),
  resizeMode: 'contain',
})`
  width: 30px;
  height: 24px;
  margin-left: 10px;
  margin-top: -6px;
`;

export const HeartIcon = styled.Image.attrs({
  source: require('@assets/heart.png'),
  resizeMode: 'contain',
})`
  width: 20px;
  height: 20px;
  margin-left: 10px;
  margin-right: 10px;
`;

export const Link = styled.Text`
  color: #3e3e3e;
  text-decoration: underline;
`;
