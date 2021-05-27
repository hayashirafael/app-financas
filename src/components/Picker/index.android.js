import React from 'react';
import {Picker as PickerR} from '@react-native-picker/picker'
import {ViewPicker} from './styles'

export default function Picker({onChange, tipo}) {
 return (
   <ViewPicker>
    <PickerR 
    style={{width: '100%'}}
    selectedValue={tipo}
    onValueChange={(valor) => onChange(valor)}
    >
      <Picker.Item label="Selecione uma opção" value="1" />
    <Picker.Item label="Receita" value="receita" />
    <Picker.Item label="Despesa" value="despesa" />
    
   </PickerR>
   </ViewPicker>
  );
}