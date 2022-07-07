'use strict';

class Produto {
    #tipo;
    #valor;
    constructor(tipo, valor) {
        this.#validaValor(valor);
        this.#tipo = tipo;
        this.#valor = valor;
    }
    #validaValor(valor) {
        if (typeof(valor) !== 'number') {
            console.log('Valor inválido!');
        }
    }
    getDados() {
        return `
        Tipo: ${this.#tipo}
        R$ ${this.#valor}`;
    }
    setValor(valor) {
        this.#valor = valor;
    }
}

class Livro extends Produto {
    #titulo;
    #numPag;
    constructor(titulo, numPag, valor) {
        super('Livro', valor);
        this.#titulo = titulo;
        this.#numPag = numPag;
    }
    // Agora, sobrescrevemos o método getDados() da super classe, que é quando se pega o método dela, coloca na subclasse e faz alguma alteração.
    // Crio o mesmo método da super classe, coloco na subclasse e altero o código dele.
    getDados() {
        return `
        ${super.getDados()}
        Titulo: ${this.#titulo}
        Número de Páginas: ${this.#numPag};`
    }
}

const x = new Livro('Meu Livro', 122, 33);
// x.setValor(47);
console.log(x.getDados());