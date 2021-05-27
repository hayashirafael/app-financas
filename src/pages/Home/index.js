import React, {useContext, useState, useEffect} from 'react';
import Header from '../../components/Header'
import HistoricoList from '../../components/HistoricoList'
import {ViewContainer, ViewNomeSaldo, Nome, Saldo, TextMovimentacao, List} from './styles'
import database from '@react-native-firebase/database'


import {AuthContext} from '../../contexts/auth'



export default function Home() {

  const [historico, setHistorico] = useState([])
  const [saldo, setSaldo] = useState(0)
  const {user} = useContext(AuthContext)
  const uid = user && user.uid

  useEffect(() => {
    async function loadList() {
      await database().ref('users').child(uid).on('value', (snapshop)=> {
        setSaldo(snapshop.val().saldo)
      })
    }
    loadList()
  }, [])

 return (
   <ViewContainer>
     <Header/>

     <ViewNomeSaldo>
       <Nome>{user && user.nome}</Nome>
       <Saldo>Saldo: R$ {saldo.toFixed(2)}</Saldo>
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