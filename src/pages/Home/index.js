import React, {useContext, useState} from 'react';
import Header from '../../components/Header'
import HistoricoList from '../../components/HistoricoList'
import {ViewContainer, ViewNomeSaldo, Nome, Saldo, TextMovimentacao, List} from './styles'


import {AuthContext} from '../../contexts/auth'



export default function Home() {

  const [historico, setHistorico] = useState([
    {key: 1, tipo: 'receita', valor: 1200},
    {key: 2, tipo: 'despesa', valor: 200},
    {key: 3, tipo: 'receita', valor: 40},
    {key: 4, tipo: 'despesa', valor: 89.62},
    {key: 5, tipo: 'despesa', valor: 542.67},
    {key: 6, tipo: 'despesa', valor: 24.12},
    {key: 7, tipo: 'despesa', valor: 389.02},
    {key: 8, tipo: 'despesa', valor: 189.54},
  ])

  const {user, signOut} = useContext(AuthContext)

 return (
   <ViewContainer>
     <Header/>

     <ViewNomeSaldo>
       <Nome>{user && user.nome}</Nome>
       <Saldo>Saldo: R${user.saldo}</Saldo>
     </ViewNomeSaldo>

     <TextMovimentacao>Ultimas movimentações</TextMovimentacao>
     <List
     showsVerticalScrollIndicator={false}
     data={historico}
     keyExtractor={item => item.key}
     renderItem={({item}) => (<HistoricoList data={item}/>)}
     />

   </ViewContainer>
  );
}