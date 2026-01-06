const months = [ "Janeiro", "Fevereiro", "Maio", "Segunda-Feira", "Terça-Feira" ];

// splice(3)
// Remove todos os elementos a partir do índice 3 (inclusive).
// Retorna os elementos removidos em um novo array.
// Aqui, remove ["Segunda-Feira", "Terça-Feira"] e guarda em daysOfWeek.
const daysOfWeek = months.splice(3);

// splice(2, 0, "Março", "Abril")
// No índice 2, remove 0 elementos e insere "Março" e "Abril".
// Isso insere os novos meses sem remover nada.
// O retorno é um array vazio, pois nada foi removido.
const emptyArray = months.splice(2, 0, "Março", "Abril");

console.log(months);      // ["Janeiro", "Fevereiro", "Março", "Abril", "Maio"]
console.log(daysOfWeek);  // ["Segunda-Feira", "Terça-Feira"]
console.log(emptyArray);  // []