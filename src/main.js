import '~/config/ReactotronConfig';
import React from 'react';
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { ApolloProvider } from '@apollo/react-hooks';

import Routes from './routes';
import apolloClient from '~/graphql/apolloClient';

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
    <ApolloProvider client={apolloClient}>
      <PaperProvider theme={DefaultTheme}>
        <NavigationContainer theme={DefaultTheme}>
          <Routes />
        </NavigationContainer>
      </PaperProvider>
    </ApolloProvider>
  );
}
