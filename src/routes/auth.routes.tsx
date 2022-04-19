import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../screens/Home'
import {AppointmentDetails} from '../screens/AppointmentDetails'
import {AppointmentCreate} from '../screens/AppointmentCreate'

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
      <Stack.Screen name='AppointmentDetails' component={AppointmentDetails}/>
      <Stack.Screen name='AppointmentCreate' component={AppointmentCreate}/>
    </Stack.Navigator>
  )
}