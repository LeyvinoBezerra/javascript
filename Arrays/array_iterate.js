// Diferença entre os dois loops:
//
// 1. for clássico com índice (for let i = 0; i < itens.length; i++):
//    - Usa uma variável de controle (i) que representa o índice do array.
//    - Permite acessar tanto o valor (itens[i]) quanto a posição.
//    - Útil quando você precisa manipular ou saber o índice dos elementos.
//
// 2. for...of (for const item of itens):
//    - Itera diretamente sobre os valores do array.
//    - Não fornece o índice, apenas o conteúdo.
//    - Mais simples e legível quando você só precisa dos elementos.
//
// Resumindo: use o for clássico quando precisar do índice,
// e use for...of quando quiser apenas percorrer os valores.


const itens = [ "arroz", "feijão", "farinha", "azeite", "macarrão" ];

for (let i = 0; i < itens.length; i++) {
    console.log("-> " + itens[i]);
}

console.log("");

for (const item of itens) {
    console.log("-> " + item);
}
