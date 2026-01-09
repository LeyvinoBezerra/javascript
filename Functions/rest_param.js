console.log(sumAll(1, 4, 2, 7, 9)); // Chamada com vários argumentos
console.log(sumAll());              // Chamada sem argumentos
console.log(sumAll(6));             // Chamada com apenas um argumento

// Função com rest parameter (...numbers):
// - O operador "..." antes do nome do parâmetro transforma todos os argumentos
//   passados na chamada em um array.
// - Assim, 'numbers' será um array contendo todos os valores recebidos.
//   Exemplo: sumAll(1,4,2) → numbers = [1,4,2]
// - Se nenhum argumento for passado, numbers será um array vazio [].
function sumAll(...numbers) {
    console.log("-> " + numbers); // Mostra o array de argumentos recebidos

    let sum = 0;
    // Percorre o array 'numbers' somando cada elemento
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    // return → devolve a soma total para quem chamou a função
    return sum;
}