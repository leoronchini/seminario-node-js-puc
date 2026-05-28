import express from "express";
import gameRoutes from "./routes/game.routes";

const app = express();

app.use(express.json());
app.use(gameRoutes);
app.listen(3000, () => {
    console.log(
        "Servidor rodando em http://localhost:3000"
    );
});