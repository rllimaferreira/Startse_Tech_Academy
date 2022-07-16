import express from 'express';
import { StatusCodes } from 'http-status-codes';

// Criação de servidor utilizando o framework Express

const app = express();
const PORT = 3000;
let users = [
    {id: 1, name: 'Rodrigo Ferreira', age: 29},
    {id: 2, name: 'Rafael Ribeiro', age: 31},
    {id: 3, name: 'Gabriel Custódio', age: 33},
];

// Define que todas as nossas REQUESTS vão estar enviando os objetos no formato JSON
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

app.get('/', (request, response) => {
    return response.send('<h1>Trabalhando com servidor express.</h1>')
})

// Criação de 2 edpoints de GET

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

// Criação de endpoints de POST

app.post('/users', (request, response) => {
    const newUser = request.body;

    users.push(newUser);

    return response.status(StatusCodes.CREATED).send(newUser);
});

// Criação de recurso de PUT

app.put('/users/:userId', (request, response) => {
    const userId = request.params.userId;
    const updatedUser = request.body;

    users = users.map(user => {
        if(Number(userId) === user.id) {
            return updatedUser;
        }
            return user;
    });

    return response.send(updatedUser);
});