import React from 'react'
import {Image} from 'react-native'
import {styles} from './styles'

export function GuildIcon(){
  const uri='https://w7.pngwing.com/pngs/842/992/png-transparent-discord-computer-servers-teamspeak-discord-icon-video-game-smiley-online-chat-thumbnail.png'

  return(
    <Image source={{uri}} style={styles.image} resizeMode="cover"/>
  )
}