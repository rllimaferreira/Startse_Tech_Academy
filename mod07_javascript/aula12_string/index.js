// Tipo de Dado Primitivo
// STRING - CADEIA DE CARACTERES

let nome = 'Ana';

console.log(nome);
console.log(typeof nome);

let idade = 20;
let conc = nome + ', ' + idade + ' anos.';
console.log(conc);

// Template STRING
conc = `${nome}, ${idade} anos...`;

console.log(conc);

// Métodos de Strings
console.log(nome.length); // Quant. de caracteres
console.log(nome.toUpperCase()); // Letra maiúscula
console.log(nome.toLowerCase()); // Letra minúscula

let localizacao = 'Curitiba - PR';
let estado = localizacao.substring(11,13);
console.log(estado);

// ou

let estado2 = localizacao.substring(localizacao.length-2);

console.log(estado2);

//

let x = '3.5';
let y = '4.2';

let resultado = x + y;

console.log(resultado);
console.log(typeof resultado);

// Método de obtenção de índice

const frase = 'Minha cor favorita é: azul;'
const indice = frase.indexOf(':');

console.log(indice);

const cor = frase.substring(indice+2);
console.log(cor);

// Método Replace

let texto = 'basquete';
let novoTexto = texto.replace('bas','ra');
console.log(novoTexto);

//

let frase2 = 'A festa ocorrerá no primeiro dia do mês';

let novaFrase2 = frase2.replaceAll('primeiro','segundo');
console.log(novaFrase2);