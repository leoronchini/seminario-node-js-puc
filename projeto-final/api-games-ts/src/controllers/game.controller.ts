import { Request, Response } from "express";

import {
    getGames,
    createGameService,
    getGameByIdService,
    deleteGameService,
    updateGameService
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


export const findGameByIdController = async (
    req: Request,
    res: Response
) => {

    try {

        const id = Number(req.params.id);

        const game = await getGameByIdService(id);

        res.json(game);

    } catch (error: any) {

        res.status(404).json({
            erro: error.message
        });
    }
};


export const updateGameController = async (
    req: Request,
    res: Response
) => {

    try {

        const id = Number(req.params.id);

        const {
            nome,
            categoria,
            nota
        } = req.body;

        const game = await updateGameService(
            id,
            nome,
            categoria,
            nota
        );

        res.json(game);

    } catch (error: any) {

        res.status(400).json({
            erro: error.message
        });
    }
};


export const deleteGameController = async (
    req: Request,
    res: Response
) => {

    try {

        const id = Number(req.params.id);

        await deleteGameService(id);

        res.json({
            mensagem: "Jogo removido com sucesso"
        });

    } catch (error: any) {

        res.status(404).json({
            erro: error.message
        });
    }
};