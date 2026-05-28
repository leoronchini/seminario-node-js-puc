import { Router } from "express";

import {
    findGames,
    createNewGame,
    findGameByIdController,
    updateGameController,
    deleteGameController
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

router.get(
    "/games/:id",
    findGameByIdController
);

router.put(
    "/games/:id",
    updateGameController
);

router.delete(
    "/games/:id",
    deleteGameController
);
