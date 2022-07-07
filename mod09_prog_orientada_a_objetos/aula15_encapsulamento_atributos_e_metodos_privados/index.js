'use strict';

class Produto {
    #tipo;
    #valorX;
    constructor(tipo, valor) {
        this.#validaValor(valor);
        this.#tipo = tipo;
        this.#valorX = valor;
    }
    #validaValor(valor) {
        if (typeof(valor) !== 'number') {
            console.log('Valor inválido!');
        }
    }
    getDados() {
        return `
        Tipo: ${this.#tipo}
        Valor: ${this.#valorX}`;
    }

}

class Livro extends Produto {
    #titulo;
    #numPag;
    
    constructor(titulo, numPag, valor) {
        super('Livro', valor)
        this.#titulo = titulo;
        this.#numPag = numPag;
    }
}

const prod = new Produto('Novo Nome Produto Genérico', 54);

const liv = new Livro('Meu Livro', 121, 33);

// console.log(prod.getDados());

console.log(liv.valorX);