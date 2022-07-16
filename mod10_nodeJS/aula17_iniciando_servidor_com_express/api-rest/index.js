import express from 'express';

// Criação de servidor utilizando o framework Express

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

app.get('/', (request, response) => {
    response.send('<h1>Trabalhando com servidor express.</h1>')
})