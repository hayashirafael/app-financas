import React from 'react';
import {ViewContainer, ViewIcone, TextIcone, TextValor, ViewTipo} from './styles'
import Icon from 'react-native-vector-icons/Feather';

export default function HistoricoList({data}) {
 return (
   <ViewContainer>
       <ViewTipo>
        <ViewIcone tipo={data.tipo}>
            <Icon 
            name={data.tipo === 'receita' ? 'arrow-up' : 'arrow-down'}
            color="white" 
            size={20} />
            <TextIcone>{data.tipo}</TextIcone>
        </ViewIcone>
       </ViewTipo>
    <TextValor>R$ {data.valor}</TextValor>
   </ViewContainer>
  );
}