// CONDICIONAIS

// TERNÁRIO

/*
let nota1 = 0;
let nota2 = 9;

function media (n1, n2) {
    return (n1 + n2) / 2;
}

let resultado = media(nota1, nota2);

// OPERADOR TERNÁRIO CONDICIONAL - 3 OPERANDOS

let situacao = (resultado >= 6) ? `Aprovado com média ${resultado}` :
               (resultado >= 4) ? `Em recuperação com média ${resultado}` :
                                  `Reprovado com média ${resultado}`;

console.log(situacao);
*/

// SWITCH

/*
let opcao = 2;

switch (opcao) {
    case 1:
        console.log('Entrega do tipo econômica em até 10 dias úteis.');
        break;
    case 2:
        console.log('Entrega do tipo normal em até 3 dias úteis.');
        break;
    case 3:
        console.log('Entrega do tipo expressa em até 1 dia útil.');
        break;
    default:
        console.log('Opção de entrega inválida.');
        break;
}

console.log("Logo após a execução do Switch.");
*/

let opcao = 'expressa';

switch (opcao) {
    case 'economica':
        console.log('Entrega do tipo econômica em até 10 dias úteis.');
        break;
    case 'normal':
        console.log('Entrega do tipo normal em até 3 dias úteis.');
        break;
    case 'expressa':
        console.log('Entrega do tipo expressa em até 1 dia útil.');
        break;
    default:
        console.log('Opção de entrega inválida.');
        break;
}

console.log("Logo após a execução do Switch.");