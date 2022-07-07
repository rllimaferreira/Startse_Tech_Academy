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

    //  Método estático
    static calculaVolume(largura, altura, profundidade) {
        return largura * altura * profundidade;
    }

    parcelaValor(parcelas) {
        return this.valor / parcelas;
    }
}

const prod = new Produto('Meu Produto', 10, 3, 2, 80);

console.log(Produto.calculaVolume(20, 5, 7));

class Musica {
    static formato = 'mp3';
    #titulo;
    #duracao;
    constructor(titulo, duracao) {
        this.#titulo = titulo;
        this.#duracao = duracao;
    }
    static converteSegundosEmMinutos(duracao) {
        const min = Math.floor(duracao / 60);
        let seg = duracao % 60;
        if (seg < 10 && seg > 0) {
            seg = `0${duracao % 60}`;
        } else if (seg < 10) {
            seg = '00';
        }
        return `${min}:${seg}`;
    }
    // Apesar de não fazer sentido usar volume desta forma para esta classe, foi utilizado aqui apenas para mostrar como funcionaria a reutilização do método static em uma outra classe.
    getDuracao() {
        console.log(Produto.calculaVolume(34, 65, 9));
        return this.#duracao;
    }
}

const musica1 = new Musica('Minha música', 190);
console.log(musica1.getDuracao());