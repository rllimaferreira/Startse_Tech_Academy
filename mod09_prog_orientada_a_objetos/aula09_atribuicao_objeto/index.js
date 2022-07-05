'use strict';

class Produto {
    codigo;
    titulo;
    valor;
    constructor(codigo, titulo, valor) {
        this.codigo = codigo;
        this.titulo = titulo;
        this.valor = valor;
    }
}

class Disciplina {
    codigo;
    nome;
    nota;
    constructor(codigo, nome, nota) {
        this.codigo = codigo;
        this.nome = nome;
        this.nota = nota;
    }
}

const d1 = new Disciplina(123, 'Matemática', 8);

console.log(d1);

const d2 = d1;

d2.codigo = 444;
d2.nome = 'Álgebra';
d2.nota = 9;

// Nota-se que d1 também foi alterado.
console.log(d1);
console.log(d2);

// d1 e d2 apontam para a mesma região de memória onde esses dados se encontram.
// Assim, qualquer alteração que for feita em d2, já estará alterando d1 da mesma forma.
