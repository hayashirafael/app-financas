import React, {useContext} from 'react';
import { View, Text, Button } from 'react-native';
import styled from 'styled-components'
import Header from '../../components/Header'
import {ViewContainer} from './styles'


import {AuthContext} from '../../contexts/auth'



export default function Home() {

  const {user, signOut} = useContext(AuthContext)

 return (
   <ViewContainer>
     <Header/>



   </ViewContainer>
  );
}