import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '~/pages/Home';

const HomeStack = createStackNavigator();
export const Routes = () => {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{ headerTitle: 'Home' }}
      />
    </HomeStack.Navigator>
  );
};

export default Routes;
