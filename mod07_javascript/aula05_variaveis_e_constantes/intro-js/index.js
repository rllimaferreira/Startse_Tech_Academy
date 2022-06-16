// let, function, if, else, while, for, etc

var x;

console.log(x); // undefined

x = 3;

console.log(x); // 3

// A partir de 2015:

let y;

console.log(y); // undefined

y = 3;

console.log(y); // 3

//

let primeiroNome = 'Carlos';
console.log(primeiroNome);

primeiroNome = 'Ana'; // Sobrescrevemos o valor da variável
console.log(primeiroNome);

let endereco = 'R. Brasil';
console.log(endereco);

let a = 2, b = 3;
a = 2; b = 3

let soma = a+b;

console.log(soma);

a=10; b=30;

soma = a+b;

console.log(soma);

// CONSTANTE

const pi = 3.1416;  // Indico que este valor não vai ser alterado em algum momento dentro deste código
let raio = 3; // Indico que vai alterar
let comprimentoCircunferencia = 2*pi*raio;

console.log(comprimentoCircunferencia)