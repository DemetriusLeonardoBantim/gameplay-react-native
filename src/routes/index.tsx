import React from 'react'
import {SafeAreaView} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {AuthRoutes} from './auth.routes'


export function Routes(){
  return(
    <NavigationContainer>
      <AuthRoutes/>
    </NavigationContainer>
  )
}
