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

export const findGameById = async (
    id: number
) => {

    const result = await pool.query(
        "SELECT * FROM games WHERE id = $1",
        [id]
    );

    return result.rows[0];
};

export const updateGameRepository = async (
    id: number,
    nome: string,
    categoria: string,
    nota: number
) => {

    const result = await pool.query(
        `
        UPDATE games
        SET nome = $1,
            categoria = $2,
            nota = $3
        WHERE id = $4
        RETURNING *
        `,
        [nome, categoria, nota, id]
    );

    return result.rows[0];
};


export const deleteGameRepository = async (
    id: number
) => {

    await pool.query(
        "DELETE FROM games WHERE id = $1",
        [id]
    );
};