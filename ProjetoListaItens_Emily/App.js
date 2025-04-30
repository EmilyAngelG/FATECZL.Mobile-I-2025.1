// App.js
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ProductCard from './components/ProductCard';

export default function App() {
  const produtos = [
    {
      id: '1',
      nome: 'Fone de Ouvido',
      imagem: 'https://img.freepik.com/fotos-gratis/exibicao-de-fones-de-ouvido-de-musica-levitando_23-2149817602.jpg?t=st=1745975868~exp=1745979468~hmac=c5f6af2e4e1039092ab0e96f13cb4b56501b94f989dea15dfee4248df5b8225a&h=150',
      preco: 149.99,
    },
    {
      id: '2',
      nome: 'Smartphone',
      imagem: 'https://img.freepik.com/vetores-gratis/tela-realista-para-smartphone-com-aplicativos-diferentes_52683-30241.jpg?t=st=1745975603~exp=1745979203~hmac=57c328bd31c79718f9ec99634813a9ced76646d8e279ac62f2798942ef6e7bbc&h=150',
      preco: 1999.99,
    },
    {
      id: '3',
      nome: 'Notebook',
      imagem: 'https://img.freepik.com/psd-premium/uma-tela-de-laptop-que-diz-mockup-de-laptop_20144-339.jpg?h=150',
      preco: 3299.99,
    },
    {
      id: '4',
      nome: 'Teclado Mecânico',
      imagem: 'https://img.freepik.com/fotos-gratis/teclado-isolado-em-um-fundo-branco-ilustracao-de-renderizacao-3d_1057-42299.jpg?t=st=1745975977~exp=1745979577~hmac=058d19e4d8184f89c1992663dd6ee4898ba30c97f485256275e597e77a4dba3d&h=150',
      preco: 299.99,
    },
    {
      id: '5',
      nome: 'Mouse Gamer',
      imagem: 'https://img.freepik.com/fotos-premium/rato-de-jogo-holografico-plano-com-configuracoes-de-controle-flutuantes-e-conceito-de-espaco-de-copia-como-um-rato-de-jogo_980716-682757.jpg?h=150',
      preco: 159.99,
    },
    {
      id: '6',
      nome: 'Cadeira Gamer',
      imagem: 'https://img.freepik.com/fotos-premium/poltrona-profissional-moderna-do-jogo-do-computador-preto-e-azul-em-um-fundo-branco-renderizacao-3d_476612-14196.jpg?h=150',
      preco: 899.99,
    },
  ];

   return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.titulo}>Lista de Produtos</Text>
        {produtos.map((produto) => (
          <ProductCard
            key={produto.id}
            nome={produto.nome}
            imagem={produto.imagem}
            preco={produto.preco}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingBottom: 40,
    paddingTop: 40,
    backgroundColor: '#f0f0f0',
    flexGrow: 1, // ESSENCIAL para permitir scroll em toda a tela
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});