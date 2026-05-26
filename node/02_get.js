const express = require("express");

const app = express();

// Rota GET inicial
app.get("/", (req, res) => {

    res.send("API de Games funcionando!");
});

// Servidor na porta 3000
app.listen(3000, () => {

    console.log("Servidor rodando em http://localhost:3000");
});