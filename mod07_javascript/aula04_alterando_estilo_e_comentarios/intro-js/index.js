document.querySelector('#t1').textContent = 'JavaScript - Introdução';
document.querySelector('#t2').textContent = 'Exemplificando algumas funcionalidades';

// Apresenta uma mensagem, armazena a variável nome e esconde o formulário de login
/*
function bemVindo() {
    const nome = document.querySelector('#nomeUsuario').value;
    alert(`Olá ${nome}! Seja bem-vindo`);
    document.getElementById('formularioLogin').style.display = 'none';
}
*/

function mudaCorFundo() {
    const menu = document.querySelector('#coresFundo');
    const cor = menu.options[menu.selectedIndex].value;
    document.body.style.background = cor;
}