import React from 'react';
import {ViewContainer, TextNome, ButtonNewLink, NewText, ButtonLogout, TextLogout} from './styles'

export default function Profile() {
 return (
   <ViewContainer>
     <TextNome>
       Teste
     </TextNome>

     <ButtonNewLink>
        <NewText>Registrar Gastos</NewText>
     </ButtonNewLink>

     <ButtonLogout>
       <TextLogout>Logout</TextLogout>
     </ButtonLogout>
   </ViewContainer>
  );
}