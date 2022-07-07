'use strict';

class Produto {
    tipo;

    constructor(tipo) {
        this.tipo = tipo;
    }
    getDados() {
        return `
        Tipo: ${this.tipo}`;
    }
}

class Livro extends Produto {
    titulo;
    numPag;
    
    constructor(tipo, titulo, numPag) {
        super('Livro')
        this.titulo = titulo;
        this.numPag = numPag;
        console.log(this.getDados());
    }
    exibeDadosLivro() {
        console.log(`${this.getDados()}. ${this.titulo} - ${this.numPag} páginas`);
    }
}

const prod = new Produto('Prod...');

const liv = new Livro('Produto', 'Meu livro', 133);

liv.exibeDadosLivro();
