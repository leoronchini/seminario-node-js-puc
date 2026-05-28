import {
    findAllGames,
    createGameRepository,
    findGameById,
    updateGameRepository,
    deleteGameRepository
} from "../repositories/game.repository";

export const getGames = async () => {

    return await findAllGames();
};

export const createGameService = async (
    nome: string,
    categoria: string,
    nota: number
) => {

    if (!nome || !categoria) {

        throw new Error(
            "Nome e categoria são obrigatórios"
        );
    }

    if (nota < 0 || nota > 10) {
        throw new Error(
            "Nota inválida"
        );
    }

    return await createGameRepository(
        nome,
        categoria,
        nota
    );
};

export const getGameByIdService = async (
    id: number
) => {

    const game = await findGameById(id);

    if (!game) {

        throw new Error(
            "Jogo não encontrado"
        );
    }

    return game;
};


export const updateGameService = async (
    id: number,
    nome: string,
    categoria: string,
    nota: number
) => {

    const game = await findGameById(id);

    if (!game) {

        throw new Error(
            "Jogo não encontrado"
        );
    }

    return await updateGameRepository(
        id,
        nome,
        categoria,
        nota
    );
};


export const deleteGameService = async (
    id: number
) => {

    const game = await findGameById(id);

    if (!game) {

        throw new Error(
            "Jogo não encontrado"
        );
    }

    await deleteGameRepository(id);
};