// Declarando uma constante "n" com valor numérico 10
const n = 10;

try {
    // Tentando executar um código que pode gerar erro.
    // Aqui chamamos "toUpperCase()" em um número.
    // Como "n" é um número e não uma string, isso gera um erro de tipo.
    const s = n.toUpperCase();
    
} catch (err) {
    // Se ocorrer erro dentro do bloco try, o código vem para cá.
    // "err" guarda o objeto de erro.
    // Imprime o nome do erro e a mensagem.
    // Resultado esperado: "Error: TypeError -> n.toUpperCase is not a function"
    console.log(`Error: ${err.name} -> ${err.message}`);

} finally {
    // O bloco "finally" SEMPRE é executado,
    // independentemente de ter dado erro ou não no try.
    // Serve para garantir que alguma ação final aconteça.
    console.log("EXECUTED!");
}