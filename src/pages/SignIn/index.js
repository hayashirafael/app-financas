import React from 'react';
import { View, Text } from 'react-native';

import {Background, AreaInput, Container, Input, Logo} from './styles'

export default function SignIn() {
 return (
   <Background>
       <Container>
         <Logo source={require('../../assets/Dogecoin.png')} />

         <AreaInput>
          <Input 
          placeholder="Email"
          autoCorrect={false}
          autoCapitalize="none"
          />
         </AreaInput>

         <AreaInput>
          <Input 
          placeholder="Senha"
          autoCorrect={false}
          autoCapitalize="none"
          />
         </AreaInput>
       </Container>
   </Background>
  );
}