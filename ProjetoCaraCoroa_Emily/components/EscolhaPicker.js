import React from 'react';
import { Picker } from '@react-native-picker/picker';
import styles from '../styles/styles';

export default function EscolhaPicker({ escolha, setEscolha }) {
  return (
    <Picker
      selectedValue={escolha}
      onValueChange={(valor) => setEscolha(valor)}
      style={styles.picker}
    >
      <Picker.Item label="Cara" value="cara" />
      <Picker.Item label="Coroa" value="coroa" />
    </Picker>
  );
}
