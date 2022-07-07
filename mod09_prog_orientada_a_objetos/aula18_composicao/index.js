'use strict';

class CupomDesconto {
    #desconto1 = 15;
    #desconto2 = 25;
    constructor() { }
    getDesconto(gastos) {
        if (gastos >= 10000 && gastos <= 30000) {
            console.log(`Você tem direito a ${this.#desconto1}% de desconto!`);
        } else if (gastos > 30000) {
            console.log(`Você tem direito a ${this.#desconto2}% de descontos!`);
        } else {
            console.log(`Infelizmente, você não tem descontos no momento!`);
        }
    }
}

class Cliente {
    #nome;
    #gastosAcumulados = 0;
    #cupom;
    constructor(nome) {
        this.#nome = nome;
        this.#cupom = new CupomDesconto();
    }
    getBeneficios() {
        this.#cupom.getDesconto(this.#gastosAcumulados);
    }
    setGasto(valor) {
        this.#gastosAcumulados += valor;
    }
}

const clientenovo = new Cliente('Bill');
clientenovo.setGasto(2000);
clientenovo.getBeneficios();
clientenovo.setGasto(20000);
clientenovo.getBeneficios();