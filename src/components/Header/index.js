import React from 'react';
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'

import { ViewContainer, ButtonMenu} from './styles'

export default function Header() {
    const navigation = useNavigation()
 return (
   <ViewContainer>
       <ButtonMenu onPress={() => navigation.toggleDrawer()} >
           <Icon name="menu" color="#FFF" size={30} />
       </ButtonMenu>
   </ViewContainer>
  );
}