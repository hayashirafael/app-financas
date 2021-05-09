import React, {useState} from 'react';
import { Platform } from 'react-native';

import {Background, AreaInput, Container, Input, Logo, SubmitButton, SubmitText, CreateButton, CreateText} from '../SignIn/styles'

export default function SignIn() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

 return (
   <Background>
       <Container
       behavior={Platform.OS === 'ios' ? 'padding' : ''} //Caso reconheca que eh IOS, ira dar o padding
       enable
       >
         <Logo source={require('../../assets/Dogecoin.png')} />

         <AreaInput>
          <Input 
          placeholder="Email"
          autoCorrect={false}
          autoCapitalize="none"
          value={email}
          onChangeText={(text) => setEmail(text)}
          />
         </AreaInput>

         <AreaInput>
          <Input 
          placeholder="Senha"
          autoCorrect={false}
          autoCapitalize="none"
          value={password}
          onChangeText={(text) => setPassword(text)}
          />
         </AreaInput>

         <SubmitButton>
           <SubmitText>Acessar</SubmitText>
         </SubmitButton>

         <CreateButton>
           <CreateText>Criar uma conta</CreateText>
         </CreateButton>
       </Container>
   </Background>
  );
}