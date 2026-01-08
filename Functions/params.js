// Chamadas da função sum passando diferentes argumentos.
// Os valores fornecidos (4, 5), (10, 1), (4, 4) são os "argumentos"
// que serão recebidos pelos "parâmetros" a e b dentro da função.
sum(4, 5);
sum(10, 1);
sum(4, 4);

// Declaração da função sum.
// Os nomes 'a' e 'b' são parâmetros: variáveis locais que recebem os valores
// passados na chamada da função.
// Funções declaradas com 'function' sofrem hoisting, ou seja,
// podem ser chamadas antes da linha onde foram escritas.
function sum(a, b) {
    const r = a + b; // Soma os parâmetros 'a' e 'b'.
    console.log(r);  // Exibe o resultado no console.
}