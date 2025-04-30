import React from 'react';
import { View, Text, Image, Button, Alert } from 'react-native';
import styles from '../styles/styles.js';

export default function ProductCard({ nome, imagem, preco }) {
  const comprarProduto = () => {
    Alert.alert('Compra realizada', `Produto ${nome} comprado!`);
  };

  return (
    <View style={styles.card}>
      <Image source={{ uri: imagem }} style={styles.image} />
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.preco}>R$ {preco.toFixed(2)}</Text>
      <Button title="Comprar" onPress={comprarProduto} />
    </View>
  );
}
