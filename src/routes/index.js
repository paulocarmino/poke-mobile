import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from '@react-navigation/native';

import { IconButton } from 'react-native-paper';

import Home from '~/pages/Home';

const DefaultHeaderOptions = () => {
  const { colors } = useTheme();

  return {
    title: 'PokeApp',
    headerTitleAlign: 'center',
    headerTintColor: colors.accent,
    headerStyle: {
      shadowColor: colors.primary,
      backgroundColor: colors.primary,
      elevation: 0,
    },
    headerLeft: () => <IconButton icon="menu" color={colors.accent} />,
    headerRight: () => <IconButton icon="magnify" color={colors.accent} />,
  };
};

const HomeStack = createStackNavigator();
export const Routes = () => {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{ ...DefaultHeaderOptions() }}
      />
    </HomeStack.Navigator>
  );
};

export default Routes;
