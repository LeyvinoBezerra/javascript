// Criando um array com os números de 1 a 10
const array = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
console.log(array); // imprime o array completo

// Usando filter para pegar apenas os números pares
// A função "e => e % 2 == 0" retorna true quando o número é divisível por 2
const evenArray = array.filter(e => e % 2 == 0);
console.log(evenArray); // imprime [2, 4, 6, 8, 10]

// Usando filter novamente, mas agora com dois parâmetros:
// "e" é o elemento, "i" é o índice
// A condição "i < 4" retorna true apenas para os quatro primeiros índices (0,1,2,3)
const firstElemsArray = array.filter((e, i) => i < 4);
console.log(firstElemsArray); // imprime [1, 2, 3, 4]