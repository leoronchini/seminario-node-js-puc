import { Router } from "express";

import {
    findGames,
    createNewGame
} from "../controllers/game.controller";

const router = Router();

router.get("/games", findGames);

router.post("/games", createNewGame);

export default router;


//exemplo de payload:
// {
//     "nome": "fifa",
//     "categoria": "esportes",
//     "nota": 10
// }