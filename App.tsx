import React from 'react'
import 'react-native-gesture-handler';
import {StatusBar,View} from 'react-native'
import {useFonts} from 'expo-font'
import {Routes} from './src/routes'
import {Inter_400Regular, Inter_500Medium} from '@expo-google-fonts/inter'
import {Rajdhani_500Medium, Rajdhani_700Bold} from '@expo-google-fonts/rajdhani'
import AppLoading from 'expo-app-loading'
import {Background} from './src/components/Background'
import {AuthProvider} from './src/hooks/auth'

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  })

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return (
    <>
      <StatusBar 
      barStyle='light-content' 
      backgroundColor='transparent' 
      translucent
      />
      <AuthProvider >
        <Routes/>
      </AuthProvider>
    </>
  );
}
