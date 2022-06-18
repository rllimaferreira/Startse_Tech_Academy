// ESCOPO DE VARIÁVEIS E CONSTANTES

// Exemplo 1

// let x = 10; // variável global

// console.log(x);

// function soma(a,b) {
//     console.log(x);
//     let z = a + b; // é uma variável local
//     return z
// }

// let a;
// console.log(a);
// // console.log(z);
// console.log(soma(4,23));

// // Exemplo 2

// const gravidade = 9.8; // variável global

// console.log(gravidade);

// function calculaVelocQuedaLivre(tempo) {
//     const resultado = gravidade * tempo;
//     alert('Olá');
//     return resultado;

// }

// console.log(calculaVelocQuedaLivre(30));

// const resultado = 0;

// console.log(resultado);

function calculaKmMilha() {
    let km = document.querySelector('#valorKm').value;
    document.querySelector('#resultado').textContent = km * 1.609;
}

console.log(km);