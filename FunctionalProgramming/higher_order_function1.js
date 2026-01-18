// Função que soma dois números
const sum = (a, b) => a + b;

// Função que dobra um número
const double = a => a * 2;

// Função que soma três números
const sum2 = (a, b, c) => a + b + c;

// Função "log" que recebe outra função "f"
// Ela retorna uma nova função que:
// 1. Imprime que a função começou
// 2. Executa a função original com os argumentos recebidos
// 3. Imprime que a função terminou
// 4. Retorna o resultado da função original
const log = f => (...arguments) => {
    console.log(`${f.name} started`);
    const result = f(...arguments);
    console.log(`${f.name} finished`);
    return result;
}

// Usando "log" para envolver a função sum
// Primeiro imprime "sum started"
// Depois executa sum(2, 4) → 6
// Depois imprime "sum finished"
// Finalmente imprime o resultado 6
console.log(log(sum)(2, 4));

// Usando "log" para envolver a função double
// Imprime "double started"
// Executa double(2) → 4
// Imprime "double finished"
// Imprime o resultado 4
console.log(log(double)(2));

// Usando "log" para envolver a função sum2
// Imprime "sum2 started"
// Executa sum2(2, 4, 4) → 10
// Imprime "sum2 finished"
// Imprime o resultado 10
console.log(log(sum2)(2, 4, 4));