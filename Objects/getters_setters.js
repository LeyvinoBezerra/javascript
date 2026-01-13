// Criando um objeto chamado "square" com:
// - uma propriedade interna "_size" inicializada em 0
// - um getter "size" que retorna o valor de "_size"
// - um setter "size" que altera "_size" se o novo valor for maior que 0
const square = {
    _size: 0,

    // Getter: executado quando se lê "square.size"
    get size() {
        console.log("getter"); // imprime "getter" no console
        return this._size;     // retorna o valor atual de _size
    },

    // Setter: executado quando se atribui um valor a "square.size"
    set size(newValue) {
        console.log("setter"); // imprime "setter" no console
        if (newValue > 0) {    // só altera se o valor for positivo
            this._size = newValue;
        }
    }
}

// Usando o setter: atribuindo 10 à propriedade "size"
// Isso dispara o método set, imprime "setter" e altera _size para 10
square.size = 10;

// Usando o getter: lendo a propriedade "size"
// Isso dispara o método get, imprime "getter" e retorna o valor de _size (10)
console.log(square.size);