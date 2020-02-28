import React from 'react';
import { View } from 'react-native';

import {
  Container,
  TextsContainers,
  Text,
  TextStrong,
  Logo,
  PhoneIcon,
  ApiIcon,
  PlayerIcon,
  TitleContainer,
  TitleIcon,
  TitleText,
  TextMarginLeft,
  GotchaIcon,
  HeartIcon,
  Link,
} from './styles';

export default function Drawer() {
  return (
    <Container>
      <Logo />
      <TextsContainers>
        <Text style={{ marginTop: -5 }}>
          Projeto desenvolvido para aprimorar os
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ marginTop: 0 }}>conhecimentos com React Native</Text>
          <PhoneIcon />
        </View>

        <Text style={{ marginTop: 20 }}>
          Esse app é alimentado via GraphQL utilizando
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text>
            a<TextStrong> PokeAPI</TextStrong>
          </Text>
          <ApiIcon />
          <Text>desenvolvida em NodeJS</Text>
        </View>
        <Text>exclusivamente para esse projeto.</Text>

        <View
          style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}
        >
          <PlayerIcon />
          <Text>Quer conhecer mais Sobre a</Text>
          <TextStrong> PokeAPI</TextStrong>
          <Text>?</Text>
        </View>
        <Link
          style={{
            marginTop: 0,
            marginBottom: 15,
          }}
        >
          Acesse o repositório no Github.
        </Link>

        <TitleContainer>
          <TitleIcon />
          <TitleText>Bibliotecas Utilizadas</TitleText>
        </TitleContainer>

        <TextMarginLeft>React Native</TextMarginLeft>
        <TextMarginLeft>Expo</TextMarginLeft>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TextMarginLeft>GraphQL</TextMarginLeft>
          <GotchaIcon />
        </View>
        <TextMarginLeft>Styled Components</TextMarginLeft>

        <TitleContainer>
          <TitleIcon />
          <TitleText>Créditos</TitleText>
        </TitleContainer>

        <TextMarginLeft>
          <Link>Saepul Nahwan</Link> pelo layout no Dribbble
        </TextMarginLeft>
        <TextMarginLeft>
          <Link>Pokemonpets.com</Link>: Imagens e Informações
        </TextMarginLeft>
        <TextMarginLeft>
          <Link>Roundicons</Link> e <Link>itim2101</Link> via FlatIcons
        </TextMarginLeft>
      </TextsContainers>
      <View style={{ alignItems: 'center', marginBottom: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text>Desenvolvido com</Text>
          <HeartIcon />
          <Text>
            por <TextStrong>Paulo Carmino</TextStrong>
          </Text>
        </View>
      </View>
    </Container>
  );
}
