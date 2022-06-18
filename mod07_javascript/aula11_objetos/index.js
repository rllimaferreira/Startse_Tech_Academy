// Tipos de Dado de Referência
// OBJETO - OBJECT

let titulo = 'Introdução ao JavaScript';
let numPag = 500;

const livro = {
    titulo: 'Introdução ao JavaScript',
    numPag: 500
};

console.log(titulo);
console.log(livro);
console.log(livro.titulo);
console.log(livro.numPag);
console.log(livro['titulo']);
console.log(livro['numPag']);

livro.titulo = 'Javascript - Avançado!';
console.log(livro.titulo);

livro.numPag = '800';
console.log(livro.numPag);

livro.editora = 'Super Press';
console.log(livro);

const pessoa = {
    primeiroNome: 'Ana',
    ultimoNome: 'Silva',
    endereco: {
        rua: 'Paraná',
        num: 50
    },
    nomeCompleto: function() {
        return this.primeiroNome + ' ' + this.ultimoNome;
    } 
}

console.log(pessoa);
console.log(pessoa.primeiroNome);
console.log(pessoa.endereco);
console.log(pessoa.endereco.rua);
console.log(pessoa.endereco.num);

console.log(typeof pessoa.primeiroNome);
console.log(typeof pessoa.endereco);

console.log(pessoa.nomeCompleto());

pessoa.celular = '991234';
console.log(pessoa.celular);
console.log(pessoa);

pessoa.enderecoCompleto = function() {
    return `Rua ${this.endereco.rua}, ${this.endereco.num}`;
}

console.log(pessoa);
console.log(pessoa.enderecoCompleto());


function exibeDadosPessoa(p) {
    alert(`\n
        Nome: ${p.nomeCompleto()} \n
        Endereço: ${p.enderecoCompleto()}\n
        Celular: ${p.celular}
    `);
}

exibeDadosPessoa(pessoa);

function exibeDadosPessoa(p) {
    console.log(`\n
        Nome: ${p.nomeCompleto()} \n
        Endereço: ${p.enderecoCompleto()}\n
        Celular: ${p.celular}
    `);
}