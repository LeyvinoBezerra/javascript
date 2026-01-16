// Criando um array com números
const array1 = [ 10, 20, 30, 40 ];

// Usando map para gerar um novo array
// A função "e => e * 2" multiplica cada elemento por 2
const doubleArray = array1.map(e => e * 2);
console.log(doubleArray); // imprime [20, 40, 60, 80]

// Criando um array de objetos, cada um com "name" e "age"
const array2 = [
    { name: "Pedro", age: 30 },
    { name: "Maria", age: 25 },
    { name: "Paulo", age: 42 }
];

// Usando map para extrair apenas a propriedade "age" de cada objeto
// A função "e => e.age" retorna somente o valor da idade
const ageArray = array2.map(e => e.age);
console.log(ageArray); // imprime [30, 25, 42]