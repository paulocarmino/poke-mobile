import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';

import Routes from './routes';

import { DefaultTheme as PaperDefaultTheme } from 'react-native-paper';

const DefaultTheme = {
  ...PaperDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    primary: '#E53935',
    accent: '#FFF',
    background: '#FFF',
  },
};

export default function MainApp() {
  return (
    <PaperProvider theme={DefaultTheme}>
      <NavigationContainer theme={DefaultTheme}>
        <Routes />
      </NavigationContainer>
    </PaperProvider>
  );
}
