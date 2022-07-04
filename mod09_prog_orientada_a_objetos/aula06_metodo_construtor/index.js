'use strict';

class Filme {
    constructor(titulo, ano) {
        // A palavra reservada "this" permite diferenciar, além de o que é atributo/propriedade/parâmetro, ela permite diferenciar a própria criação/declaração do atributo da classe.
        this.titulo = titulo;
        this.ano = ano;
        // O "this" refere-se sempre a um objeto e, neste caso, a qualquer objeto que será criado a partir dessa classe.
    }
}

let meuFilme = new Filme ('Aprendendo JavaScript', 2022);

console.log(meuFilme);

class Produto {
    constructor() {
        this.tipo = 'Produto X';
    }
}

const prod = new Produto();
console.log(prod.tipo);