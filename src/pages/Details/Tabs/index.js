import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import About from '~/pages/Details/About';

const Tab = createMaterialTopTabNavigator();
export default DetailsTabs = ({ color }) => {
  return (
    <Tab.Navigator
      tabBarOptions={{ indicatorStyle: { backgroundColor: color } }}
    >
      <Tab.Screen name="About" component={About} />
      <Tab.Screen name="Stats" component={About} />
      <Tab.Screen name="Evolution" component={About} />
    </Tab.Navigator>
  );
};
