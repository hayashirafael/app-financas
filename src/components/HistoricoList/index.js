import React from 'react';
import {ViewContainer, ViewIcone, TextIcone, TextValor, ViewTipo} from './styles'
import Icon from 'react-native-vector-icons/Feather';

export default function HistoricoList() {
 return (
   <ViewContainer>
       <ViewTipo>
        <ViewIcone>
            <Icon name="arrow-up" color="white" size={20} />
            <TextIcone>receita</TextIcone>
        </ViewIcone>
       </ViewTipo>
    <TextValor>R$ 690.85</TextValor>
   </ViewContainer>
  );
}