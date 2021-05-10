import React, {useState, useContext} from 'react';
import { Platform } from 'react-native';
import {useNavigation} from '@react-navigation/native' //conseguir navegar entre as telas
import { AuthContext } from '../../contexts/auth'

import {Background, AreaInput, Container, Input, Logo, SubmitButton, SubmitText, CreateButton, CreateText} from './styles'

export default function SignIn() {
  const navigation = useNavigation()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {signIn} = useContext(AuthContext)

  function handleLogin() {
    signIn(email, password)
  }
  

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

         <SubmitButton onPress={handleLogin}>
           <SubmitText>Acessar</SubmitText>
         </SubmitButton>

         <CreateButton onPress={() => navigation.navigate('SignUp')}>
           <CreateText>Cadastrar</CreateText>
         </CreateButton>
       </Container>
   </Background>
  );
}