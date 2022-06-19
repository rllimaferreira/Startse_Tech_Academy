// LAÇOS DE REPETIÇÃO - LOOPS

// FOR OF

/*
const operacoes = ['soma', 'subtração', 'multiplicação', 'divisão'];

function montaTextoDaLista() {
    let textoDaLista = '';
    for(let operacao of operacoes) { // Percorre o vetor inteiro, porque pega todos os itens
        textoDaLista += '<li>' + operacao + '</li>';
    }
    //console.log(textoDaLista);
    return textoDaLista;
}

document.querySelector('#listaOperacoes').innerHTML = montaTextoDaLista();

// <li>soma</li><li>subtração</li>
*/

//

/*
let jogadores = [
    {
        nome: 'Beto',
        posicao: 'Atacante'
    },
    {
        nome: 'Gil',
        posicao: 'Zagueiro'
    },
    {
        nome: 'Milton',
        posicao: 'Volante'
    }
];

for(let jogador of jogadores) {
    console.log(jogador.nome);
}
*/

// WHILE

const operacoes = ['soma', 'subtração', 'multiplicação', 'divisão'];

let i = 0;
while(i < operacoes.length) {
    console.log(operacoes[i]);
    i++
};

// DO

let j = 0;
do {
    //alert('Olá, tudo bem?')
    console.log(`${j} - ${operacoes[j]}`);
    j++;
} while(j < operacoes.length)

