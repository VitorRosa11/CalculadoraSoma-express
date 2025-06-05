const express = require(express);
const app = (express);
const port = 3000;

app.use(express.json());

app.get('/soma/:a/:b', (req, res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    const resultado = a + b;
    res.send(`Resultado da soma: ${resultado}`);
});

// Rota de subtração
app.get('/subtrair/:a/:b', (req, res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    const resultado = a - b;
    res.send(`Resultado da subtração: ${resultado}`);
});

app.get('/multiplicar/:a/:b', (req, res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    const resultado = a * b;
    res.send(`Resultado da multiplicação: ${resultado}`);
});

app.get('/dividir/:a/:b', (req, res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);

    if (b === 0) {
        return res.send('Erro: divisão por zero não é permitida.');
    }

    const resultado = a / b;
    res.send(`Resultado da divisão: ${resultado}`);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
