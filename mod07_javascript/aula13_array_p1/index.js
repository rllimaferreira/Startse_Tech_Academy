// Tipo de Dado de Referência
// ARRAY - ARRANJO - VETOR

let produtosExemploArrayVazio = []; // vazio

let produtos = ['camiseta','calça','blusa'];

console.log(produtos);
console.log(produtos.length);

//

let cidades = ['Rio', 'Curitiba', 'Londrina', 'Salvador'];

console.log(cidades);
console.log(cidades[0]);
console.log(cidades[3]);
console.log(cidades[cidades.length-2]);

cidades[1] = 'Caxias';
console.log(cidades);

cidades[2] = 30;
console.log(cidades);

console.log(typeof cidades);

//

let jogadores = [
    {
        nome: 'Beto',
        posicao: 'Atacante'
    },
    {
        nome: 'Gil',
        posicao: 'Zagueiro'
    },
]
console.log(jogadores[0]);

//

const email = 'fulano@meuemail.com';

let emailArray = email.split('@');

console.log(emailArray);

//

const palavrasChave = 'cinema,futebol,televisão,viagem,boliche';
const hobbies = palavrasChave.split(',');
console.log(hobbies);

const tiposHobbies = hobbies.join(' | ');
console.log(tiposHobbies);