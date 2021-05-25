import React, {useState} from 'react';
import { SafeAreaView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import Header from '../../components/Header'
import Picker from '../../components/Picker'
import {ViewContainer, Input, SubmitButton, SubmitText} from './styles'


export default function New() {
  const [valor, setValor] = useState('')
  const [tipo, setTipo] = useState('receita')

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

      <SubmitButton>
        <SubmitText>Registrar</SubmitText>
      </SubmitButton>
    
    </SafeAreaView>  

   </ViewContainer>
   </TouchableWithoutFeedback>
  );
}