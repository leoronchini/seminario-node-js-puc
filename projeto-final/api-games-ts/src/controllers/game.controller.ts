import { Request, Response } from "express";

import {
    getGames,
    createGameService
} from "../services/game.service";

export const findGames = async (
    req: Request,
    res: Response
) => {

    const games = await getGames();

    res.json(games);
};

export const createNewGame = async (
    req: Request,
    res: Response
) => {
    try {
        const {
            nome,
            categoria,
            nota
        } = req.body;

        const game = await createGameService(
            nome,
            categoria,
            nota
        );

        res.status(201).json(game);

    } catch (error: any) {

        res.status(400).json({
            erro: error.message
        });
    }
};