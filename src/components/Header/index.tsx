import React, { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { Text, View,TouchableOpacity } from 'react-native';

import { theme } from '../../global/styles/theme';
import { styles } from './style';

type Props = {
  title: string;
  action?: ReactNode;
}

export function Header({ title, action}: Props ){
  const { secondary100, secondary40, heading } = theme.colors;

  const navigation = useNavigation();

  function handleGoBack(){
    navigation.goBack();
  }

  return (
    <LinearGradient 
      style={styles.container}
      colors={[secondary100, secondary40]}
    >
      <TouchableOpacity onPress={handleGoBack}>
        <Feather 
          name="arrow-left"
          size={24}
          color={heading}
        />
      </TouchableOpacity>

      <Text style={styles.title}>
        { title }
      </Text>

      {
        action 
        ? 
        <View>
          { action }
        </View>
        :
        <View style={{ width: 24 }}/>
      }
    </LinearGradient>
  );
}