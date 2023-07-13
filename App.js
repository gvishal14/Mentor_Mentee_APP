import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
import Intro from './src/screens/intro'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import Intro2 from './src/screens/intro2'
import Intro3 from './src/screens/intro3'
import login from './src/screens/login'
import signup from './src/screens/signup'
import signup2 from './src/screens/signup2'


const Stack = createNativeStackNavigator();
const App = () => {
  useEffect(()=> {
    SplashScreen.hide();
  },[])

  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Intro1' component={Intro}/>
        <Stack.Screen name='Intro2' component={Intro2}/>
        <Stack.Screen name='Intro3' component={Intro3}/>
        <Stack.Screen name='Login' component={login}/>
        <Stack.Screen name='Signup' component={signup}/>
        <Stack.Screen name='Signup2' component={signup2}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})