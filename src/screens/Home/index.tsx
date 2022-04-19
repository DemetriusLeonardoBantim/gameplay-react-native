import React,{useState} from 'react'
import {View,FlatList,Text} from 'react-native'
import { styles } from './style'
import {Profile} from '../../components/Profile'
import {ButtonAdd} from '../../components/ButtonAdd'
import { CategorySelect } from '../../components/CategorySelect'
import {Background} from '../../components/Background'
import {ListHeader} from '../../components/ListHeader'
import {Appointment} from '../../components/Appointment'
import {ListDivider} from '../../components/ListDivider'
import { useNavigation } from '@react-navigation/native'

export function Home(){
  const [category, setCategory] = useState('');
  const navigation = useNavigation()

  const appointments = [
    {
      id:'1',
      guild:{
        id:'1',
        name:'Lendários',
        icon:null,
        owner: true
      },
      category:'1',
      date:'22/06 as 20:40h',
      description:'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id:'2',
      guild:{
        id:'1',
        name:'Lendários',
        icon:null,
        owner: true
      },
      category:'1',
      date:'22/06 as 20:40h',
      description:'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id:'3',
      guild:{
        id:'1',
        name:'Lendários',
        icon:null,
        owner: true
      },
      category:'1',
      date:'22/06 as 20:40h',
      description:'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id:'4',
      guild:{
        id:'1',
        name:'Lendários',
        icon:null,
        owner: true
      },
      category:'1',
      date:'22/06 as 20:40h',
      description:'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id:'5',
      guild:{
        id:'1',
        name:'Lendários',
        icon:null,
        owner: true
      },
      category:'1',
      date:'22/06 as 20:40h',
      description:'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id:'7',
      guild:{
        id:'1',
        name:'Lendários',
        icon:null,
        owner: true
      },
      category:'1',
      date:'22/06 as 20:40h',
      description:'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id:'8',
      guild:{
        id:'1',
        name:'Lendários',
        icon:null,
        owner: true
      },
      category:'1',
      date:'22/06 as 20:40h',
      description:'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    }
  ]


  function handleCategorySelect(categoryId:string){
    categoryId === category ? setCategory('') : setCategory(categoryId)
  } 

  function handleAppointmentsDetails(){
    navigation.navigate('AppointmentDetails' as any)
  }

  function handleAppointmentsCreate(){
    navigation.navigate('AppointmentCreate' as any)
  }

  return(
    <Background>
        <View style={styles.header}>
          <Profile/>
          <ButtonAdd onPress={handleAppointmentsCreate}/>
        </View>
        <View>
          <CategorySelect 
            categorySelected={category}
            setCategory={handleCategorySelect}
          />
        </View>
        <ListHeader title="Partidas agendadas" subtitle='Total 6' />
        <FlatList 
          data={appointments} 
          keyExtractor={item => item.id} 
          renderItem={({item}) => (
            <Appointment data={item}
              onPress={handleAppointmentsDetails}
            />
          )}
          contentContainerStyle={{paddingBottom:69}}
          ItemSeparatorComponent={() => <ListDivider/>}
          style={styles.matches}
          showsHorizontalScrollIndicator={false}
        />
    </Background>
  )
}