import React, { useContext, useRef, useEffect } from 'react';
import { darken } from 'polished';
import { useQuery } from '@apollo/react-hooks';
import LottieView from 'lottie-react-native';

import {
  Grid,
  ItemContainer,
  InfoContainer,
  TextsContainer,
  ItemName,
  ItemNumber,
  Image,
  Text,
  LoadingContainer,
} from './styles';

import Label from '~/components/Label';
import { GET_ALL_POKEMONS } from '~/graphql/query';
import { SearchbarContext } from '~/contexts/Searchbar';

export default function GridList({ navigation }) {
  const { searchbarQuery } = useContext(SearchbarContext);
  const loadingRef = useRef(null);

  const { loading, error, data } = useQuery(GET_ALL_POKEMONS, {
    variables: {
      where: {
        name_contains: searchbarQuery,
      },
    },
  });

  const handleNavigation = item => {
    navigation.navigate('Details', item);
  };

  useEffect(() => {
    if (loadingRef.current) loadingRef.current.play();
  }, [loadingRef]);

  if (loading)
    return (
      <LoadingContainer>
        <LottieView
          ref={loadingRef}
          style={{
            width: 100,
            height: 100,
          }}
          source={require('@assets/loading.json')}
        />
        <Text>Loading...</Text>
      </LoadingContainer>
    );

  if (error) return <Text>Error :(</Text>;

  return (
    <Grid
      keyboardShouldPersistTaps="handled"
      itemDimension={150}
      items={data.pokemons}
      spacing={5}
      renderItem={({ item, index }) => (
        <ItemContainer
          backgroundColor={item.color_custom}
          rippleColor={darken(0.1, item.color_custom)}
          onPress={() => handleNavigation(item)}
        >
          <>
            <InfoContainer>
              <TextsContainer>
                <ItemNumber>{item.number}</ItemNumber>
                <ItemName>{item.name}</ItemName>
              </TextsContainer>
              <Label types={item.types} />
            </InfoContainer>
            <Image source={{ uri: item.img_custom }} />
          </>
        </ItemContainer>
      )}
    />
  );
}
