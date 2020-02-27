import React, { useContext } from 'react';
import { darken, setSaturation } from 'polished';
import { useQuery } from '@apollo/react-hooks';

import {
  Grid,
  ItemContainer,
  InfoContainer,
  TextsContainer,
  ItemName,
  ItemNumber,
  Image,
  Text,
} from './styles';

import Label from '~/components/Label';
import { GET_ALL_POKEMONS } from '~/graphql/query';
import { SearchbarContext } from '~/contexts/Searchbar';

export default function GridList({ navigation }) {
  const { searchbarQuery } = useContext(SearchbarContext);

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

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :(</Text>;

  return (
    <Grid
      keyboardShouldPersistTaps="handled"
      itemDimension={150}
      items={data.pokemons}
      spacing={5}
      renderItem={({ item, index }) => (
        <ItemContainer
          // Satura a cor em 0.5 para melhorar visualização. Quando o servidor de PRD estiver online, a imagem e a cor jã virão com satuação, devido ao upload com efeitos do Clodinary.
          backgroundColor={setSaturation('0.60', item.color_custom)}
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
            <Image source={{ uri: item.img }} />
          </>
        </ItemContainer>
      )}
    />
  );
}
