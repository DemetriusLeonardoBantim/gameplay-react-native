import React from 'react'
import {View,TouchableOpacity,ImageBackground,Text} from 'react-native'
import {Background} from '../../components/Background'
import {Header} from '../../components/Header'
import {Fontisto} from '@expo/vector-icons'
import { theme } from '../../global/styles/theme'
import BannerImg from '../../assets/banner.png'
import {styles} from './styles'
import { ListHeader } from '../../components/ListHeader'
import { FlatList } from 'react-native-gesture-handler'
import {Member} from '../../components/Member'
import {ButtonIcon} from '../../components/ButtonIcon'
import {ListDivider} from '../../components/ListDivider'

export function AppointmentDetails(){
  const members = [
    {
      id:'1',
      username:'Demetrius Leonardo',
      avatar_url:'https://github.com/DemetriusLeonardoBantim.png',
      status:'online'
    },
    {
      id:'2',
      username:'Rodrigo',
      avatar_url:'https://github.com/DemetriusLeonardoBantim.png',
      status:'offline'
    },
    {
      id:'3',
      username:'Rodrigo',
      avatar_url:'https://github.com/DemetriusLeonardoBantim.png',
      status:'online'
    },
    {
      id:'4',
      username:'Rodrigo',
      avatar_url:'https://github.com/DemetriusLeonardoBantim.png',
      status:'offline'
    }
  ]


  return(
    <Background>
      <Header title='Detalhes' action={
        <TouchableOpacity>
          <Fontisto name="share" size={20} color={theme.colors.primary}/>
        </TouchableOpacity>
      }/>
      <ImageBackground source={BannerImg} style={styles.banner}>

        <View style={styles.bannerContent}>
          <Text style={styles.title}>
            Lendários
          </Text>
          <Text style={styles.subTitle}>
            É hoje que vamos chegar ao challenger sem perder uma partida da md10
          </Text>
        </View>
      </ImageBackground>
      <ListHeader title='Jogadores' subtitle='Total 3'/>

      <FlatList 
      data={members} 
      keyExtractor={item => item.id} 
      renderItem={({item}) => (
        <Member data={item}/>
      )} 
      ItemSeparatorComponent={() => <ListDivider/>} 
      style={styles.members}
      />

      <View style={styles.footer}>
        <ButtonIcon title="Entrar na partida"/>    
      </View>
    </Background>
  )
}