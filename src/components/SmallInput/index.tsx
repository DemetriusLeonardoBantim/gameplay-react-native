import React from 'react'
import {styles } from './style'
import {TextInput,TextInputProps} from 'react-native'

export function SmallInput({...rest}: TextInputProps){
  return(
    <TextInput {...rest} style={styles.container} keyboardType='numeric'/>
  )
}