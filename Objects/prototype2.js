// Criando um objeto chamado "vehicle" com duas propriedades:
// - speed: 0.0
// - drive: função que imprime "drive!" no console
const vehicle = {
    speed: 0.0,
    drive: function() { console.log("drive!"); }
};

// Criando um novo objeto "car" que herda de "vehicle".
// Assim, car terá acesso às propriedades e métodos de vehicle.
const car = Object.create(vehicle);

// Adicionando uma nova propriedade própria ao objeto car: "color" = "blue"
car.color = "blue";

// Exibindo os nomes das propriedades próprias de "vehicle".
// Resultado: [ 'speed', 'drive' ]
console.log(Object.getOwnPropertyNames(vehicle));

// Exibindo os nomes das propriedades próprias de "car".
// Resultado: [ 'color' ]
console.log(Object.getOwnPropertyNames(car));

// Usando um loop for...in para listar todas as propriedades acessíveis em "car",
// incluindo as herdadas de "vehicle".
for (const p in car) {
    console.log("-> " + p);
    // Resultado: 
    // -> color   (própria de car)
    // -> speed   (herdada de vehicle)
    // -> drive   (herdada de vehicle)
}

// Verificando se a propriedade "color" existe e tem valor truthy.
// Como car.color = "blue", imprime:
if (car.color) {
    console.log("The car color is " + car.color);
}

// Verificando se "color" não é undefined.
// Também imprime "The car color is blue".
if (car.color !== undefined) {
    console.log("The car color is " + car.color);
}

// Verificando se a chave "color" existe dentro de car (mesmo que herdada).
// Como "color" é própria de car, imprime novamente:
if ("color" in car) {
    console.log("The car color is " + car.color);
}