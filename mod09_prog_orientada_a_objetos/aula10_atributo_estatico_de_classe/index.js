'use strict';

class Produto {
    static GRANDE = 10;
    static MEDIO = 5;
    static PEQUENO = 1;
    codigo;
    titulo;
    valor;
    tamanho;
    constructor(codigo, titulo, valor, tamanho) {
        this.codigo = codigo;
        this.titulo = titulo;
        this.valor = valor;
        this.tamanho = tamanho;
    }
}

class Veiculo {
    tamanho;
    constructor(tamanho) {
        this.tamanho = tamanho;
    }
}

const p1 = new Produto(345, 'Meu Produto', 54, Produto.GRANDE);
const p2 = new Produto(777, 'Novo Produto', 76, Produto.MEDIO);
console.log(p1);
console.log(p2);

const v = new Veiculo(Produto.GRANDE);
console.log(v);

// O atributo de propriedade static pode ser usado em qualquer classe
// Vai funcionar como se fosse uma constante que pode ser aplicada a diferentes produtos