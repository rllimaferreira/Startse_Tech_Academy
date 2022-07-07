'use strict';

export class CupomDesconto {
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
