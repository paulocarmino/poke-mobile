import styled from 'styled-components/native';
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import { Dimensions } from 'react-native';
import { setSaturation } from 'polished';

const barWidth = Dimensions.get('screen').width - 150;

export const Container = styled.View`
  flex: 1;

  margin: 0px 20px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: 600;

  margin-bottom: 10px;
  margin-top: 20px;

  color: #3b3b3b;
`;

export const ItemContainer = styled.View`
  flex-direction: row;
  padding: 3px 0px;
  justify-content: space-between;
  align-items: center;
`;

export const ItemTitle = styled.Text`
  width: 60px;
  text-align: right;

  font-weight: 500;
  color: #909090;
`;

export const ItemNumber = styled.Text`
  color: #3b3b3b;
`;

export const Bar = styled(ProgressBarAnimated).attrs(({ color }) => {
  return {
    width: barWidth,
    height: 10,
    backgroundColor: setSaturation('0.65', color),
    borderColor: '#DDDDDD',
  };
})``;
