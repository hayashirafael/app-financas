import React, {useContext} from 'react';
import { useNavigation } from '@react-navigation/native'
import Header from '../../components/Header'

import { AuthContext } from '../../contexts/auth'

import {ViewContainer, TextNome, ButtonNewLink, NewText, ButtonLogout, TextLogout} from './styles'

export default function Profile() {

  const navigation = useNavigation()
  const { user, signOut } = useContext(AuthContext)

 return (
   <ViewContainer>
     <Header/>
     <TextNome>
       {user && user.nome}
     </TextNome>

     <ButtonNewLink
     onPress={ () => navigation.navigate('Registrar') }
     >
        <NewText>Registrar Gastos</NewText>
     </ButtonNewLink>

     <ButtonLogout
     onPress={() => signOut()}
     >
       <TextLogout>Logout</TextLogout>
     </ButtonLogout>
   </ViewContainer>
  );
}