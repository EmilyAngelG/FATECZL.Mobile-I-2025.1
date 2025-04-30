export default function calcular(a, b, operacao) {
  switch (operacao) {
    case 'somar':
      return a + b;
    case 'subtrair':
      return a - b;
    case 'multiplicar':
      return a * b;
    case 'dividir':
      return b !== 0 ? a / b : 'Erro: divisão por zero';
    default:
      return 0;
  }
}
