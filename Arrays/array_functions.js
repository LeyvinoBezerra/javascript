const fruits = [ "laranja", "banana", "figo", "abacate" ];

// slice(1, 3)
// Cria uma cópia de parte do array, do índice 1 até o índice 3 (não incluso).
// Aqui retorna ["banana", "figo"], sem alterar o array original.
const sliceFruits = fruits.slice(1, 3);

// concat("melancia")
// Cria um novo array adicionando "melancia" ao final de fruits.
// Não altera o array original, apenas retorna um novo.
const newFruits = fruits.concat("melancia");

// reverse()
// Inverte a ordem dos elementos do array.
// sort()
// Ordena os elementos em ordem alfabética (por padrão).
// Aqui, primeiro inverte, depois ordena.
newFruits.reverse().sort();

console.log(fruits);      
// ["laranja", "banana", "figo", "abacate"]
// O array original não foi alterado por slice ou concat.

console.log(newFruits);   
// ["abacate", "banana", "figo", "laranja", "melancia"]
// Array novo, invertido e depois ordenado alfabeticamente.

console.log(newFruits.join("||")); 
// join("||")
// Junta todos os elementos do array em uma string,
// separando-os pelo delimitador "||".
// Resultado: "abacate||banana||figo||laranja||melancia"

console.log(sliceFruits); 
// ["banana", "figo"]
// Resultado do slice, parte do array original.

console.log(fruits.indexOf("figo")); 
// indexOf("figo")
// Retorna o índice da primeira ocorrência do elemento.
// Aqui, "figo" está na posição 2.