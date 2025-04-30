import React, { useState } from 'react';
import { View, Text, Button, Image } from 'react-native';
import styles from './styles/styles';
import EscolhaPicker from './components/EscolhaPicker';
import sortearMoeda from './functions/sortear';

export default function App() {
  const [escolha, setEscolha] = useState('cara');
  const [resultado, setResultado] = useState(null);
  const [tentativas, setTentativas] = useState(0);
  const [acertos, setAcertos] = useState(0);
  const [erros, setErros] = useState(0);

  const sortear = () => {
    const resultadoSorteio = sortearMoeda();
    setResultado(resultadoSorteio);
    setTentativas(tentativas + 1);

    if (escolha === resultadoSorteio) {
      setAcertos(acertos + 1);
    } else {
      setErros(erros + 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Sorteio: Cara ou Coroa</Text>
      
      <EscolhaPicker escolha={escolha} setEscolha={setEscolha} />

      <Button title="Sortear" onPress={sortear} />

      {resultado && (
        <View style={styles.resultadoContainer}>
          <Image
            source={
              resultado === 'cara'
                ? require('./assets/cara.png')
                : require('./assets/coroa.png')
            }
            style={styles.imagem}
          />
          <Text style={styles.resultadoTexto}>Resultado: {resultado.toUpperCase()}</Text>
        </View>
      )}

      <Text style={styles.estatisticas}>Tentativas: {tentativas}</Text>
      <Text style={styles.estatisticas}>Acertos: {acertos}</Text>
      <Text style={styles.estatisticas}>Máquina venceu: {erros}</Text>
    </View>
  );
}
