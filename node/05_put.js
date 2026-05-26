const express = require("express");

const app = express();

app.use(express.json());

// Atualiza jogo
app.put("/games/:id", (req, res) => {

    const id = req.params.id;

    res.send("Jogo " + id + " atualizado com sucesso.");
});

app.listen(3000, () => {

    console.log("Servidor rodando em http://localhost:3000");
});