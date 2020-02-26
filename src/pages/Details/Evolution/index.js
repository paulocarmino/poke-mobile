import React, { useRef, useEffect } from 'react';
import LottieView from 'lottie-react-native';

import { Container, Title, Subtitle } from './styles';

export default function Evolution() {
  const lottieRef = useRef(null);

  useEffect(() => {
    lottieRef.current.play();
  }, []);

  return (
    <Container>
      <Title>OH NO!!</Title>
      <Subtitle>This section is comming soon.</Subtitle>
      <LottieView
        ref={lottieRef}
        style={{
          width: 100,
          height: 300,
          marginTop: -30,
        }}
        source={require('@assets/waiting.json')}
      />
    </Container>
  );
}
