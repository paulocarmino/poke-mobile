import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from '@react-navigation/native';

import { IconButton } from 'react-native-paper';

import Home from '~/pages/Home';
import Details from '~/pages/Details';

const DefaultHeaderOptions = () => {
  const { colors } = useTheme();

  return {
    headerTitleAlign: 'center',
    headerTintColor: colors.accent,
    headerStyle: {
      shadowColor: colors.primary,
      backgroundColor: colors.primary,
      elevation: 0,
    },
  };
};

const HomeHeaderOptions = () => {
  const { colors } = useTheme();

  return {
    title: 'PokeApp',
    headerLeft: () => <IconButton icon="menu" color={colors.accent} />,
    headerRight: () => <IconButton icon="magnify" color={colors.accent} />,
  };
};

const DetailsHeaderOptions = () => {
  return {
    title: '',
    headerBackTitleVisible: false,
  };
};

const HomeStack = createStackNavigator();
export const Routes = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        ...DefaultHeaderOptions(),
      }}
    >
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{ ...HomeHeaderOptions() }}
      />
      <HomeStack.Screen
        name="Details"
        component={Details}
        options={{ ...DetailsHeaderOptions() }}
      />
    </HomeStack.Navigator>
  );
};

export default Routes;
