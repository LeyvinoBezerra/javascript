console.log("Início");
sayGoodMorning(); // Chamando a função antes da sua declaração.
// Isso funciona porque funções declaradas sofrem *hoisting*,
// ou seja, o JavaScript "move" a definição da função para o topo
// durante a fase de compilação.

console.log("Fim");

// Declaração da função
function sayGoodMorning() {
    console.log("Bom dia!");
}

// Regras importantes:
// - Os nomes de funções seguem as mesmas regras de variáveis:
//   podem conter letras, números, $ e _, mas não podem começar com número.
// - Funções declaradas com 'function' são elevadas (hoisting),
//   então podem ser chamadas antes da linha onde foram escritas.
// - Já funções atribuídas a variáveis (ex.: const f = function() {})
//   não sofrem hoisting da mesma forma, só podem ser usadas depois da linha de criação.