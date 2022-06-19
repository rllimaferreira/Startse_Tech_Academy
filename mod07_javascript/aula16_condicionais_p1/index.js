// CONDICIONAIS

let nota1 = 5;
let nota2 = 9;

function media (n1, n2) {
    return (n1 + n2) / 2;
}

let resultado = media(nota1, nota2);

/*
// console.log(resultado);

// if - Se... --- else - senão

if(resultado >= 0) {
    console.log(`Média ${resultado} > 0.`);
}
console.log('Olá');

if(resultado >= 6) {
    console.log(`Aprovado com média ${resultado}.`);
} else if(resultado >= 4) {
    console.log(`Em recuperação com média ${resultado}.`)
} else {
    console.log(`Reprovado com média ${resultado}.`);
}
console.log('Logo após os Ifs e Elses.');
*/

if(nota1 === 0 || nota2 === 0) {
    console.log(`Desclassificado, pois pelo menos uma das notas é igual a 0.`);
} else {
    console.log(`Classificado, pois ambas as notas são iguais a 0.`);
}

if(nota1 > 7 && nota2 > 7) {
    console.log(`Você teve um excelente desempenho.`);
} else {
    console.log(`Você teve um desempenho razoável ou satisfatório.`);
}