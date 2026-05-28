import {
    findAllGames,
    createGameRepository
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