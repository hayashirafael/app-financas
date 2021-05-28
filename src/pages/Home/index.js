import React, {useContext, useState, useEffect} from 'react';
import Header from '../../components/Header'
import HistoricoList from '../../components/HistoricoList'
import {ViewContainer, ViewNomeSaldo, Nome, Saldo, TextMovimentacao, List} from './styles'
import database from '@react-native-firebase/database'


import {AuthContext} from '../../contexts/auth'
import format from 'date-fns/format';



export default function Home() {

  const [historico, setHistorico] = useState([])
  const [saldo, setSaldo] = useState(0)
  const {user} = useContext(AuthContext)
  const uid = user && user.uid

  useEffect(() => {
    async function loadList() {
      await database().ref('users').child(uid).on('value', (snapshop)=> {
        setSaldo(snapshop.val().saldo)
      });
      await database().ref('historico').child(uid).orderByChild('date').equalTo(format(new Date, 'dd/MM/yy')).
      limitToLast(10).on('value', (snapshot)=> {
        setHistorico([])

        snapshot.forEach((childItem) => {
          let list = {
            key: childItem.key,
            tipo: childItem.val().tipo,
            valor: childItem.val().valor,
          }
          setHistorico(oldArray => [...oldArray, list].reverse())
        })
      })

    }
    loadList()
  }, [])

 return (
   <ViewContainer>
     <Header/>

     <ViewNomeSaldo>
       <Nome>{user && user.nome}</Nome>
       <Saldo>R$ {saldo.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</Saldo>
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