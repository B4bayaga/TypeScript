// let é usado par declarar uma variavel que pode ter seu valor alterado
let nome = 'Rafael';

console.log("Hello", nome,"!");
console.error("Imprime um erro.",nome,"!");
console.warn("Imprime um aviso", nome,"!");

// declarando variavel sem atribuir valor
let idade;
console.log("Inicializando variavel sem atribuir valor =",idade);

// Não se declara a mesma variavel mais de uma vez
try {
    // Tenta executar o código dentro do bloco try
    let nome = 'Rafael';
  } catch (error) {
    // Imprime uma mensagem de erro se ocorrer uma exceção
    console.log(error.message);
  }

// Para declarar variaveis com nomes compostos usamos camelCase
let nomeCompleto = 'Rafael Jesus';
console.log("Nome completo =",nomeCompleto);