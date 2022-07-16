import express from 'express';

// Criação de servidor utilizando o framework Express

const app = express();
const PORT = 3000;
let users = [
    {id: 1, name: 'Rodrigo Ferreira', age: 29},
    {id: 2, name: 'Rafael Ribeiro', age: 31},
    {id: 3, name: 'Gabriel Custódio', age: 33},
];

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

app.get('/', (request, response) => {
    return response.send('<h1>Trabalhando com servidor express.</h1>')
})

// 1ª Rota: Pegar a lista de usuários
app.get('/users', (request, response) => {
    return response.send(users);
});

// 2ª Rota: Pegar um usuário específico
app.get('/users/:userId', (request, response) => {
    const userId = request.params.userId;
    const user = users.find(user => {
        return (user.id === Number(userId))
    })
    return response.send(user);
})