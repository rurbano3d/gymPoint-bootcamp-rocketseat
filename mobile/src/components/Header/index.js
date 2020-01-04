import React from 'react';

import logo from '~/assets/logo.png';

import { Container, TextLogo, Image } from './styles';

export default function Header() {
  return (
    <Container>
      <Image source={logo} />
      <TextLogo>GYMPOINT</TextLogo>
    </Container>
  );
}
