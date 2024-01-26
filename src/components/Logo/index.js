import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';

export default Logo = props => {
  return (
    <View style={styles.container}>
      <Image source={require('../imgs/logo.png')} />
      <Text style={styles.texto}>Qual é a melhor opção??</Text>
    </View>
  );
};
