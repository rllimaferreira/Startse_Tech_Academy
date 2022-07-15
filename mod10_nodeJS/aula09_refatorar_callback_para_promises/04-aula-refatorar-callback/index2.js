import fs from 'fs';
import { promisify } from 'util'; // Esta biblioteca é do próprio Node

const readFilePromise = promisify(fs.readFile);

let alunos;

// fs.readFile('./alunos.json', (erro, dados) => {
//     if(erro) {
//         console.log(erro);
//         return;
//     }
//     alunos = JSON.parse(dados);
//     console.log('alunos:', alunos);
// })

// Lê-se um arquivo e, assim que termina a leitura, recebe os dados da função com o arrow function
readFilePromise('./alunos.json').then((dados) => {
    alunos = JSON.parse(dados);
    console.log('alunos:', alunos);
}).catch((error) => {
    console.error(error);
});