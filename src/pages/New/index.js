import React, {useState} from 'react';
import { SafeAreaView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import Header from '../../components/Header'
import {ViewContainer, Input, SubmitButton, SubmitText} from './styles'

export default function New() {
  const [valor, setValor] = useState('')
  const [tipo, setTipo] = useState(null)

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

      <SubmitButton>
        <SubmitText>Registrar</SubmitText>
      </SubmitButton>
    
    </SafeAreaView>  

   </ViewContainer>
   </TouchableWithoutFeedback>
  );
}