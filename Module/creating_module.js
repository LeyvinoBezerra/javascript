// Importando exportes nomeados do arquivo math.js
// "PI" é importado com o nome alternativo "piNumber"
// "sum" é importado como "sumOp"
// "double" é importado como "doubleOp"
import { PI as piNumber, sum as sumOp, double as doubleOp } from './math.js';

// Importando o export default do arquivo math.js
// Como "multiply" foi exportado como default, não precisa de chaves
import multiply from './math.js';

// Também seria possível importar tudo de uma vez em um objeto "m"
// (essa linha está comentada)
// import * as m from './math.js'

// Imprimindo os valores e resultados das funções
console.log(piNumber);       // imprime 3.1416
console.log(sumOp(1, 3));    // imprime 4 (soma de 1 + 3)
console.log(doubleOp(4));    // imprime 8 (dobro de 4)
console.log(multiply(2, 5)); // imprime 10 (multiplicação 2 * 5)