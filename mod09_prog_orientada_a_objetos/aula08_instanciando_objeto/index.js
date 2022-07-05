'use strict';

class Produto {
    codigo;
    titulo;
    constructor(codigo, titulo) {
        this.codigo = codigo;
        this.titulo = titulo;
    }
}

class Disciplina {
    codigo;
    nome;
    constructor(codigo, nome) {
        this.codigo = codigo;
        this.nome = nome;
    }
}

const d1 = new Disciplina(123, 'Matemática');

console.log(d1);

const p1 = new Produto(455, 'Produto xyz');

console.log(p1.tamanho);

const d2 = new Disciplina(124, 'Química');

console.log(d2.codigo);