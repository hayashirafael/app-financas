import React, {useState} from 'react';
import { SafeAreaView, Keyboard, TouchableWithoutFeedback, Alert } from 'react-native';
import Header from '../../components/Header'
import Picker from '../../components/Picker'
import {ViewContainer, Input, SubmitButton, SubmitText} from './styles'
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import { format } from 'date-fns'
import {useNavigation} from '@react-navigation/native'

export default function New() {

  const navigation = useNavigation()
  const [valor, setValor] = useState('')
  const [tipo, setTipo] = useState('1')

  function handleSubmit() {
    Keyboard.dismiss();
    if (isNaN(parseFloat(valor)) || tipo === '1') {
      alert('Preencha todos os valores')
      return
    }
    Alert.alert(
      'Confirmando dados',
      `Tipo: ${tipo} - Valor: ${parseFloat(valor)}`,
      [
        {
        text: 'Cancelar',
        style: 'cancel'
        },
        {
          text: 'Continuar',
          onPress: () => handleAdd()
        }
      ]
    )
  }

  async function handleAdd() {
    let uid = await auth().currentUser.uid;
    let key = await database().ref('historico').child(uid).push().key;
    await database().ref('historico').child(uid).child(key).set({
      tipo: tipo,
      valor: parseFloat(valor),
      date: format(new Date(), 'dd/MM/yy')
    })

    //Atualizar o saldo
    let user = database().ref('users').child(uid);
    await user.once('value').then((snapshop) => {
      let saldo = parseFloat(snapshop.val().saldo);
      tipo === 'despesa' ? saldo -= parseFloat(valor) : saldo += parseFloat(valor);
      user.child('saldo').set(saldo)
    })
    setValor('')
    Keyboard.dismiss()
    alert('valor adicionado')
    navigation.navigate('Home')
  }

 return (
   <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
   <ViewContainer>
     <Header/>

     <SafeAreaView style={{alignItems: 'center'}}>
      <Input
      placeholder="Valor desejado"
      keyboardType="numeric"
      returnKeyType="next"
      onSubmitEditing = {() => Keyboard.dismiss()} 
      value={valor}
      onChangeText={(text) => setValor(text)}
      />
      <Picker onChange={setTipo} tipo={tipo}/>

      <SubmitButton onPress={handleSubmit}>
        <SubmitText>Registrar</SubmitText>
      </SubmitButton>
    
    </SafeAreaView>  

   </ViewContainer>
   </TouchableWithoutFeedback>
  );
}