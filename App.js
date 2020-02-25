import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import MainApp from './src/main';

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <MainApp />
      </NavigationContainer>
    </PaperProvider>
  );
}
