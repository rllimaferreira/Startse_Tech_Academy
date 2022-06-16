// OPERADOR NEGAÇÃO - NOT - !

let conectado = true;

console.log(!conectado);

console.log(conectado);

// DESIGUALDADE !=, !==

// == IGUALDADE
// === IGUALDADE ESTRITA - EXATAMENTE IGUAL

let nota1 = 5;
let nota2 = '5';

console.log(nota1 == nota2);

console.log(nota1 === nota2);

console.log(nota1 != nota2);

console.log(nota1 !== nota2);

console.log(!(nota1 == nota2));

console.log(!(nota1 === nota2));

// OPERADORES LÓGICOS BINÁRIOS

let a = 2;
let b = 3;
let c = 5;
let d = 7;

console.log(a > b);
console.log(b > c);
console.log(c > b);

console.log((a > b) && (c > b)); // && - AND - E
console.log((d > b) && (c > b)); // && - AND - E
console.log((d > b) || (c > b)); // || - OR - OU
console.log((a > b) || (c > b)); // || - OR - OU

// OPERADOR INCREMENTAL

// ++

// Exemplo 1
let x = 10;

let num = ++x; // let num = x + 1;

console.log(num);

// Exemplo 2
let y = 10;
let num2 = y++;

console.log(num2);
console.log(y)

// 
let numeroTeste = 10;
let teste = x++;

console.log(teste);

console.log(numeroTeste);

console.log(++numeroTeste) // numeroTeste = numeroTeste + 1;

console.log(numeroTeste);

// OPERADOR DECREMENTAL

// --

