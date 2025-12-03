// models/restauranteModels.js
import pool from "../db.js";

/* Obtener todos los restaurantes con el nombre del dueño */
export const getAllRestaurantes = async () => {
    const [rows] = await pool.query(`
        SELECT r.*, u.nombre AS nombreDueno, u.correo AS correoDueno
        FROM restaurantes r
        INNER JOIN usuarios u ON r.id_usuario = u.idUsuario
        ORDER BY r.idRestaurante DESC
    `);

    return rows;
};

/* Obtener un restaurante por ID */
export const getRestauranteById = async (id) => {
    const [rows] = await pool.query(`
        SELECT r.*, u.nombre AS nombreDueno, u.correo AS correoDueno
        FROM restaurantes r
        INNER JOIN usuarios u ON r.id_usuario = u.idUsuario
        WHERE r.idRestaurante = ?
    `, [id]);

    return rows[0] || null;
};

/* Crear un restaurante */
export const createRestaurante = async ({ nombreRestaurante, direccion, telefono, id_usuario }) => {
    const [result] = await pool.query(`
        INSERT INTO restaurantes (nombreRestaurante, direccion, telefono, id_usuario)
        VALUES (?, ?, ?, ?)
    `, [nombreRestaurante, direccion, telefono, id_usuario]);

    return {
        idRestaurante: result.insertId,
        nombreRestaurante,
        direccion,
        telefono,
        id_usuario
    };
};

/* Actualizar un restaurante */
export const updateRestaurante = async (id, data) => {
    const { nombreRestaurante, direccion, telefono } = data;

    const [result] = await pool.query(`
        UPDATE restaurantes
        SET nombreRestaurante = ?, direccion = ?, telefono = ?
        WHERE idRestaurante = ?
    `, [nombreRestaurante, direccion, telefono, id]);

    return result.affectedRows > 0;
};

/* Eliminar un restaurante */
export const deleteRestaurante = async (id) => {
    const [result] = await pool.query(`
        DELETE FROM restaurantes WHERE idRestaurante = ?
    `, [id]);

    return result.affectedRows > 0;
};
