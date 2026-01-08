// Função com parâmetros default:
// - 'a = "#"' e 'b = "*"' definem valores padrão.
// - Se a função for chamada sem argumentos, 'a' será "#" e 'b' será "*".
function print(a = "#", b = "*") {
    console.log(a + " - " + b);
}

// Chamadas da função:

print(1, 2); 
// Passa 1 para 'a' e 2 para 'b'.
// Resultado: "1 - 2"

print(); 
// Não passa nenhum argumento.
// Os parâmetros usam os valores default.
// Resultado: "# - *"

print(1); 
// Passa apenas o primeiro argumento.
// 'a' recebe 1, 'b' usa o valor default "*"
// Resultado: "1 - *"

print(1, 2, 3); 
// Passa três argumentos.
// A função só tem dois parâmetros, então o terceiro (3) é ignorado.
// Resultado: "1 - 2"