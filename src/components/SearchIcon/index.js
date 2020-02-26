import React, { useContext } from 'react';
import { useTheme } from '@react-navigation/native';
import { IconButton } from 'react-native-paper';

import { SearchbarContext } from '~/contexts/Searchbar';

export default function SearchIcon() {
  const { colors } = useTheme();
  const { searchbarBoolean, toggleSearchbar } = useContext(SearchbarContext);

  const handlePress = () => {
    toggleSearchbar();
  };
  return (
    <IconButton
      icon={searchbarBoolean ? 'magnify-close' : 'magnify'}
      color={colors.accent}
      onPress={handlePress}
    />
  );
}
