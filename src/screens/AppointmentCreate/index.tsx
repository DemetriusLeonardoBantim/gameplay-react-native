import React, {useState} from 'react'
import {Feather} from '@expo/vector-icons'
import {View,Text,TouchableOpacity,KeyboardAvoidingView,Platform,ScrollView} from 'react-native'
import { Background } from '../../components/Background'
import { Header } from '../../components/Header'
import { styles } from './style'
import {CategorySelect} from '../../components/CategorySelect'
import { theme } from '../../global/styles/theme'
import { GuildIcon } from '../../components/Guildicon'
import {SmallInput} from '../../components/SmallInput'
import {TextArea} from '../../components/TextArea'
import {Button} from '../../components/Button'
import {ModalView} from '../../components/ModalView'
import {Guilds} from '../Guilds'
import { GuildProps } from '../../components/Guild'

export function AppointmentCreate(){
  const [category, setCategory] = useState('')
  const [openGuildsModal, setOpenGuildsModal] = useState(false)
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps)


  function handleOpenGuilds(){
    setOpenGuildsModal(true)
  }

  function handleCloseModal(){
    setOpenGuildsModal(false)
  }

  function handleGuildsSelect(guildSelect:GuildProps){
    setGuild(guildSelect)
    setOpenGuildsModal(false)
  } 

  return(
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Background>
        <ScrollView>

        <Header title='Agendar partida'/>

        <Text style={[styles.label, {marginLeft:24, marginTop:36, marginBottom: 18}]}>
          Categoria
        </Text>
        <CategorySelect
          hasCheckBox
          setCategory={setCategory}
          categorySelected={category}
        />

        <View style={styles.form}>
          <TouchableOpacity onPress={handleOpenGuilds}>
            <View style={styles.select}>
              {
                guild.icon ?  <View style={styles.image}/> :  <GuildIcon/>
              }

                <View style={styles.selectBody}>
                  <Text style={styles.label}>
                    {guild.name ? guild.name : 'Selecione um servidor' }
                  </Text>
                </View>
                <Feather name="chevron-right" color={theme.colors.heading} size={18}/>
            </View>
          </TouchableOpacity>

          <View style={styles.field}>

            <View>
              <Text style={styles.label}>
                Dia e m??s
              </Text>

              <View style={styles.column}>
                <SmallInput maxLength={2}/>
                <Text style={styles.divider}> / </Text>
                <SmallInput maxLength={2}/>
              </View>
            </View>

            <View>
              <Text style={styles.label}>
                Hora e minuto
              </Text>

              <View style={styles.column}>
                <SmallInput maxLength={2}/>
                <Text style={styles.divider}> : </Text>
                <SmallInput maxLength={2}/>
              </View>
            </View>
          </View>

          <View style={[styles.field, {marginBottom: 12}]}>
            <Text style={styles.label}>
              Descri????o
            </Text>

            <Text style={styles.caracteresLimit}>
              Max 100 caracteres
            </Text>
          </View>

          <TextArea 
            multiline 
            maxLength={100} 
            numberOfLines={5} 
            autoCorrect={false}
          />

          <View style={styles.footer}>
              <Button title='Agendar'/>
          </View>

        </View>
        </ScrollView>
      </Background>

      <ModalView visible={openGuildsModal} closeModal={handleCloseModal}>
        <Guilds handleGuildSelect={handleGuildsSelect}/>
      </ModalView>

    </KeyboardAvoidingView>
  )
}