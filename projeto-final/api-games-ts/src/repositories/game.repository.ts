import { pool } from "../database/database";

export const findAllGames = async () => {

    const result = await pool.query(
        "SELECT * FROM games"
    );

    return result.rows;
};

export const createGameRepository = async (
    nome: string,
    categoria: string,
    nota: number
) => {

    const result = await pool.query(
        `
        INSERT INTO games (nome, categoria, nota)
        VALUES ($1, $2, $3)
        RETURNING *
        `,
        [nome, categoria, nota]
    );

    return result.rows[0];
};