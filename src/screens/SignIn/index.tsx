import { useNavigation } from '@react-navigation/native'
import React,{useState} from 'react'
import {View, Text,Image, Alert,ActivityIndicator} from 'react-native'
import IllustrationImg from '../../assets/illustration.png'
import { ButtonIcon } from '../../components/ButtonIcon'
import {styles} from './style'
import {Background} from '../../components/Background'
import {useAuth} from '../../hooks/auth'
import { theme } from '../../global/styles/theme'


export function SignIn(){
  const navigation = useNavigation()  
  
  const [text, setText] = useState('')
  const {user, signIn,loading} = useAuth()

  async function handleSigIn(){
    navigation.navigate('Home' as any)
    try {
        await signIn()
    }
    catch(error){
      Alert.alert(error as any)
    }  
}

  return(
    <Background>
      <View style={styles.container}>
        <Image 
          source={IllustrationImg} 
          style={styles.image} 
          resizeMode="stretch"
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se{`\n`}
            e organize suas{`\n`}
            jogatinas{`\n`}
          </Text>
          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {`\n`} favoritos com seus amigos
          </Text>
          <ButtonIcon title='Entrar com Discord' activeOpacity={0.7} onPress={handleSigIn}/>
        </View>
      </View>
    </Background>
  )
} 