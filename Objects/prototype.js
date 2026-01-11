// Criando um objeto chamado "vehicle" com duas propriedades:
// - speed: 0.0
// - drive: uma função que imprime "drive!" no console
const vehicle = {
    speed: 0.0,
    drive: function() { console.log("drive!"); }
};

// Lendo a propriedade "speed" do objeto vehicle.
// Resultado: 0.0
console.log(vehicle.speed);

// Chamando o método "drive" do objeto vehicle.
// Resultado: imprime "drive!" no console
vehicle.drive();

// Criando um novo objeto chamado "car" que herda de "vehicle"
// através de Object.create(vehicle). Ou seja, "car" terá acesso
// às propriedades e métodos definidos em "vehicle".
const car = Object.create(vehicle);

// Adicionando uma nova propriedade "color" ao objeto car.
// Agora car tem "color: blue".
car.color = "blue";

// Alterando a propriedade "speed" especificamente no objeto car.
// Isso sobrescreve o valor herdado de vehicle (0.0) para 100.0.
car.speed = 100.0;

// Exibindo a propriedade "speed" do objeto car.
// Resultado: 100.0 (valor próprio de car, não o herdado de vehicle)
console.log(car.speed);

// Chamando o método "drive" no objeto car.
// Como car não tem seu próprio método "drive", ele usa o herdado de vehicle.
// Resultado: imprime "drive!" no console
car.drive();