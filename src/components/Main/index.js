import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, Image } from 'react-native';
import styles from './style';

export default Main = () => {
  const [gasolina, setGasolina] = useState(0);
  const [alcool, setAlcool] = useState(0);
  const [resultado, setResultado] = useState('');
  const [modalVisivel, setModalVisivel] = useState(false);

  const calcular = () => {
    alcool / gasolina < 0.7 ? setResultado('Compensa usar Alcool') : setResultado('Compensa usar Gasolina');
    setModalVisivel(true);
  };

  const fecharModal = () => {
    setModalVisivel(false);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Gasolina(preço por litro)</Text>
      <TextInput
        style={styles.inpt}
        keyboardType="numeric"
        onChangeText={valorGasolina => setGasolina(valorGasolina)}
      />
      <Text style={styles.label}>Álcool(preço por litro)</Text>
      <TextInput style={styles.inpt} keyboardType="numeric" onChangeText={valorAlcool => setAlcool(valorAlcool)} />
      <TouchableOpacity style={styles.botao} onPress={calcular}>
        <Text>Calcular</Text>
      </TouchableOpacity>

      <Modal visible={modalVisivel} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Image source={require('../imgs/gas.png')} style={styles.modalImage} />
            <Text style={styles.modalLabel}>{resultado}</Text>
            <Text style={styles.modalTitlePreco}>Com os preços</Text>
            <Text style={styles.modalDetails}>Gasolina: R$ {gasolina}</Text>
            <Text style={styles.modalDetails}>Álcool: R$ {alcool}</Text>
            <TouchableOpacity style={styles.modalBotao} onPress={fecharModal}>
              <Text style={styles.label}>Calcular novamente</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};
