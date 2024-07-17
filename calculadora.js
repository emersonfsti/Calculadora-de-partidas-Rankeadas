/*
  Calculadora de partidas Rankeadas
  Data de criação: 16/07/2024
  Hora de criação: 22:00
  Autor: Emerson Felix
  Descrição: Código para calcular e classificar o saldo de vitórias de um herói
  com base em um loop de incrementos de vitórias e derrotas. O saldo de vitórias 
  é calculado a cada iteração e o nível do herói é classificado em várias categorias
  com base no saldo de vitórias atual.
 ===========================================================================================*/

// Declaração de variáveis
let vitoria = 10;
let derrota = 5;

// Função para calcular o saldo de vitórias
function soma(vitoria, derrotas) {
  let somatorio = vitoria - derrotas;
  return somatorio;
}

// Loop que itera 21 vezes
for (let index = 0; index < 21; index++) {
  let saldoVitorias = soma(vitoria, derrota); // Calcula o saldo de vitórias
  vitoria += 10; // Incrementa as vitórias em 5 a cada iteração
  derrota += 5; // Incrementa as derrotas em 2 a cada iteração

  // Estrutura de decisão para classificar o herói com base no saldo de vitórias
  switch (true) {
    // Se saldo de vitórias for menor ou igual a 10 = Ferro
    case saldoVitorias <= 10:
      console.log(
        "O Herói tem um saldo de " + saldoVitorias + " e está no nível de Ferro"
      );
      break;

    // Se saldo de vitórias for entre 11 e 20 = Bronze
    case saldoVitorias >= 11 && saldoVitorias <= 20:
      console.log(
        "O Herói tem um saldo de " +
          saldoVitorias +
          " e está no nível de Bronze"
      );
      break;

    // Se saldo de vitórias for entre 21 e 50 = Prata
    case saldoVitorias >= 21 && saldoVitorias <= 50:
      console.log(
        "O Herói tem um saldo de " + saldoVitorias + " e está no nível de Prata"
      );
      break;

    // Se saldo de vitórias for entre 51 e 80 = Ouro
    case saldoVitorias >= 51 && saldoVitorias <= 80:
      console.log(
        "O Herói tem um saldo de " + saldoVitorias + " e está no nível de Ouro"
      );
      break;

    // Se saldo de vitórias for entre 81 e 90 = Diamante
    case saldoVitorias >= 81 && saldoVitorias <= 90:
      console.log(
        "O Herói tem um saldo de " +
          saldoVitorias +
          " e está no nível de Diamante"
      );
      break;

    // Se saldo de vitórias for entre 91 e 100 = Lendário
    case saldoVitorias >= 91 && saldoVitorias <= 100:
      console.log(
        "O Herói tem um saldo de " +
          saldoVitorias +
          " e está no nível de Lendário"
      );
      break;

    // Se saldo de vitórias for maior ou igual a 101 = Imortal
    case saldoVitorias >= 101:
      console.log(
        "O Herói tem um saldo de " +
          saldoVitorias +
          " e está no nível de Imortal"
      );
      break;

    // Caso não se encaixe em nenhuma faixa de saldo de vitórias especificada
    default:
      console.log(
        "Classificação não encontrada para o saldo de vitórias: " +
          saldoVitorias
      );
      break;
  }
}
