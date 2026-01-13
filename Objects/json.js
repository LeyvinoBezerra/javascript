// Criando um objeto chamado "shape" com várias propriedades:
// - x: 10
// - y: 5
// - name: "shape1"
// - drawable: true
// - points: [] (um array vazio)
const shape = {
    x: 10,
    y: 5,
    name: "shape1",
    drawable: true,
    points: []
};

// Convertendo o objeto "shape" para uma string JSON.
// JSON.stringify transforma o objeto em texto no formato JSON.
// Resultado: '{"x":10,"y":5,"name":"shape1","drawable":true,"points":[]}'
const str = JSON.stringify(shape);

// Exibindo a string JSON no console.
console.log(str);

// Convertendo a string JSON de volta para um objeto JavaScript.
// JSON.parse lê o texto e recria o objeto original.
const obj = JSON.parse(str);

// Exibindo o objeto recriado no console.
// Resultado: { x: 10, y: 5, name: 'shape1', drawable: true, points: [] }
console.log(obj);