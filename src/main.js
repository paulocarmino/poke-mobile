import '~/config/ReactotronConfig';
import React from 'react';
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import ApolloClient, { gql } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Routes from './routes';

const DefaultTheme = {
  ...PaperDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    primary: '#E53935',
    accent: '#FFF',
    background: '#FFF',
  },
};

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
});

export default function MainApp() {
  client
    .query({
      query: gql`
        {
          rates(currency: "USD") {
            currency
          }
        }
      `,
    })
    .then(result => console.tron.log(result));

  return (
    <ApolloProvider client={client}>
      <PaperProvider theme={DefaultTheme}>
        <NavigationContainer theme={DefaultTheme}>
          <Routes />
        </NavigationContainer>
      </PaperProvider>
    </ApolloProvider>
  );
}
