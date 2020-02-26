import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import About from '~/pages/Details/About';
import Stats from '~/pages/Details/Stats';

const Tab = createMaterialTopTabNavigator();
export default DetailsTabs = ({ color, pokemon }) => {
  return (
    <Tab.Navigator
      lazy="true"
      tabBarOptions={{ indicatorStyle: { backgroundColor: color } }}
    >
      <Tab.Screen name="About" component={About} initialParams={{ pokemon }} />
      <Tab.Screen name="Stats" component={Stats} initialParams={{ pokemon }} />
      <Tab.Screen
        name="Evolution"
        component={About}
        initialParams={{ pokemon }}
      />
    </Tab.Navigator>
  );
};
