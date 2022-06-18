// TIPO DE DADO DE REFERÊNCIA

// FUNÇÃO - FUNCTION

// Declaramos a função
function exibirMensagem() { // Parâmetro
    alert.apply(`Olá ${primeiroNome} ${ultimoNome}, tudo bem?`);
}

// Chamada ou invocação da função
// exibirMensagem('Ana', 'Silva'); // Argumento

// exibirMensagem('Claudio', 'Santos'); // Argumento

function mediaAritmeticaSimples(a,b) {
    return (a + b) / 2;
}

let resultado = mediaAritmeticaSimples(10,5); // 7.5

console.log(resultado);

resultado = mediaAritmeticaSimples(45,92);

console.log(resultado);