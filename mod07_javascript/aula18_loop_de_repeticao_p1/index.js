// LAÇOS DE REPETIÇÃO - LOOPS

// FOR

const operacoes = ['soma', 'subtração', 'multiplicação', 'divisão'];

function montaTextoDaLista() {
    let textoDaLista = '';
    for(let i=0; i < operacoes.length; i++) {
        textoDaLista += '<li>' + operacoes[i] + '</li>';
    }
    console.log(textoDaLista);
    return textoDaLista;
}

document.querySelector('#listaOperacoes').innerHTML = montaTextoDaLista();

// <li>soma</li><li>subtração</li>