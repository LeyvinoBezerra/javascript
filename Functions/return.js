const a = calculateArea(5);
console.log(a); // Exibe o resultado retornado pela função (25)

const b = calculateArea(10);
console.log(b); // Exibe o resultado retornado pela função (100)

// Declaração da função calculateArea.
// O parâmetro 'n' recebe o valor passado na chamada.
// O operador ** faz a potência (n elevado a 2).
function calculateArea(n) {
    // return → devolve o resultado da operação para quem chamou a função.
    // Sem o return, a função apenas executaria o cálculo internamente,
    // mas não entregaria o valor para ser usado fora dela.
    return n ** 2;
}