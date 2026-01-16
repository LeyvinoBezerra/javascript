// Criando um array de números
const array1 = [ 1, 2, 3, 4 ];

// Usando reduce para somar todos os elementos do array
// "acum" é o acumulador, "e" é o elemento atual
// O reduce percorre o array e vai acumulando a soma
const sumArray = array1.reduce((acum, e) => acum + e);
console.log(sumArray); // imprime 10 (1+2+3+4)

// Criando um array de strings
const array2 = [ "a", "b", "c", "d" ];

// Usando reduce para concatenar todos os elementos em uma única string
// A cada passo, o acumulador recebe o valor anterior + "|" + o elemento atual
const concatArray = array2.reduce((acum, e) => acum + "|" + e);
console.log(concatArray); // imprime "a|b|c|d"