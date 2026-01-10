// Criando um objeto chamado "person" com três propriedades:
// - name: "Pedro"
// - age: 30
// - id number: "XXXXXX"
const person = {
    name: "Pedro",
    age: 30,
    "id number": "XXXXXX"
};

// Lendo a propriedade "name" do objeto usando notação de ponto.
// O valor "Pedro" é atribuído à constante p.
const p = person.name;

// Alterando a propriedade "id number" usando notação de colchetes.
// O valor muda de "XXXXXX" para "ABCDEF".
person["id number"] = "ABCDEF";

// Lendo a propriedade "age" usando notação de colchetes.
// O valor 30 é atribuído à constante a.
const a = person["age"];

// Adicionando uma nova propriedade chamada "birthDay" ao objeto.
// Como não existia antes, agora o objeto passa a ter "birthDay: 10".
person.birthDay = 10;

// Exibindo o objeto completo no console.
// Resultado: { name: "Pedro", age: 30, "id number": "ABCDEF", birthDay: 10 }
console.log(person);

// Exibindo o valor da constante p (que guarda "Pedro").
console.log(p);

// Exibindo o valor da constante a (que guarda 30).
console.log(a);