import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../screens/Home'
import {SignIn} from '../screens/SignIn'



const Stack = createNativeStackNavigator();



export function AuthRoutes(){
  return( 
    <Stack.Navigator 
      screenOptions={{
        headerShown:false,
        headerStyle: { backgroundColor: 'transparent' },
      }}
      initialRouteName="SignIn"
    >
      <Stack.Screen name='Home' component={Home}/>
      <Stack.Screen name='SignIn' component={SignIn}/>
    </Stack.Navigator>
  )
}