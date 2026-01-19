// Declarando uma constante
const PI = 3.1416;

// Função que soma dois números
function sum(a, b) {
    return a + b;
}

// Função que dobra um número
function double(a) {
    return a * 2;
}

// Função que multiplica dois números
function multiply(a, b) {
    return a * b;
}

// Exportando múltiplos itens de forma "nomeada"
// Aqui estamos exportando PI, sum e double
// Para importar, usamos chaves: import { PI, sum, double } from './arquivo.js';
export { PI, sum, double };

// Exportando um item como "default"
// Cada módulo só pode ter UM export default
// Aqui, multiply é o export padrão
// Para importar, não usamos chaves: import multiply from './arquivo.js';
export default multiply;
