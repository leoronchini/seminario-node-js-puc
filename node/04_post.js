const express = require("express");

const app = express();

// Permite receber JSON
app.use(express.json());

// Cadastro de jogo
app.post("/games", (req, res) => {

    // Dados enviados no body
    const jogo = req.body;

    console.log(jogo);

    res.send("Jogo cadastrado com sucesso!");
});

app.listen(3000, () => {

    console.log("Servidor rodando em http://localhost:3000");
});