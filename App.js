import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { View, Text, StatusBar } from 'react-native'
import database from '@react-native-firebase/database'
import 'react-native-gesture-handler'
import Routes from './src/routes/index'

export default function App() {
 return (
   <NavigationContainer>
     <StatusBar backgroundColor="#131313" barStyle="light-content" />
     <Routes/>
   </NavigationContainer>
  )
}
