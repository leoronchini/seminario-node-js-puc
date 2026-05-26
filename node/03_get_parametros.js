const express = require("express");

const app = express();

// Busca jogo pelo nome
app.get("/games/:nome", (req, res) => {

    // Captura valor da URL
    const nome = req.params.nome;

    res.send("Buscando informações do jogo: " + nome);
});

app.listen(3000, () => {

    console.log("Servidor rodando em http://localhost:3000");
});