import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from './styles/styles';
import calcular from './functions/calcular';

export default function App() {
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [operacao, setOperacao] = useState('somar');
  const [resultado, setResultado] = useState(null);

  const handleCalcular = () => {
    const res = calcular(parseFloat(valor1), parseFloat(valor2), operacao);
    setResultado(res);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora</Text>
      <TextInput
        placeholder="Digite o primeiro número"
        keyboardType="numeric"
        value={valor1}
        onChangeText={setValor1}
        style={styles.input}
      />
      <TextInput
        placeholder="Digite o segundo número"
        keyboardType="numeric"
        value={valor2}
        onChangeText={setValor2}
        style={styles.input}
      />

      <Picker
        selectedValue={operacao}
        onValueChange={(itemValue) => setOperacao(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Somar" value="somar" />
        <Picker.Item label="Subtrair" value="subtrair" />
        <Picker.Item label="Multiplicar" value="multiplicar" />
        <Picker.Item label="Dividir" value="dividir" />
      </Picker>

      <Button title="Calcular" onPress={handleCalcular} />

      {resultado !== null && (
        <Text style={styles.resultado}>Resultado: {resultado}</Text>
      )}
    </View>
  );
}
