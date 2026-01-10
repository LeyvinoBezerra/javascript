// Criando um objeto vazio chamado "student"
const student = {};

// Adicionando a propriedade "n1" com valor 7.5
student.n1 = 7.5;

// Adicionando a propriedade "n2" com valor 10.0
student.n2 = 10.0;

// Adicionando a propriedade "n3" com valor 6.0
student.n3 = 6.0;

// Exibindo o objeto completo no console.
// Resultado: { n1: 7.5, n2: 10, n3: 6 }
console.log(student);

// Removendo a propriedade "n3" do objeto usando o operador "delete"
delete student.n3;

// Exibindo novamente o objeto no console.
// Resultado: { n1: 7.5, n2: 10 }
console.log(student);