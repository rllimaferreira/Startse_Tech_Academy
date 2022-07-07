'use strict';

class Produto {
    descricao;
    largura;
    altura;
    profundidade;
    valor;

    constructor(descricao, largura, altura, profundidade, valor) {
        this.descricao = descricao;
        this.largura = largura;
        this.altura = altura;
        this.profundidade = profundidade;
        this.valor = valor;
    }

    // O método comporta-se como uma function, mas quando ele é declarado dentro de uma classe, não se deve usar a palavra reservada function
    volumeProduto() {
        return this.largura * this.altura * this.profundidade;
    }

    parcelaValor(parcelas) {
        return this.valor / parcelas;
    }
}

class Livro {
    volumeLivro() {

    }
}

const liv = new Livro();
liv.volumeLivro();


const prod = new Produto('Meu produto', 10, 3, 2, 80);
console.log(prod.parcelaValor(2));

// console.log(prod.volumeProduto(2));
// console.log(prod.descricao);
// prod.descricao = 'Novo produto';
// console.log(prod.descricao);

// function volumeProduto() {

// }