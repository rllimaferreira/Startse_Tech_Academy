'use strict';

class Laboratorio {
    #nome;
    #capacidade;
    constructor(nome, capacidade) {
        this.#nome = nome;
        this.#capacidade = capacidade;
    }
    getNome(nome) {
        return this.#nome;
    }
    getCapacidade() {
        return this.#capacidade;
    }
    setNome(nome) {
        this.#nome = nome;
    }
    setCapacidade(capacidade) {
        this.#capacidade = capacidade;
    }
}

const lab = new Laboratorio('Informática', 45);
lab.setNome('Meu novo lab');
lab.setCapacidade(77);
console.log(lab);

// Demonstração que, apesar de não recomendável, é possível declarar variável com get e set.

// let get = 0;
// console.log(get);