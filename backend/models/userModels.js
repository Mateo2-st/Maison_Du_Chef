// models/userModels.js
import pool from "../db.js";

/* ----------------------- OBTENER TODOS LOS USUARIOS ----------------------- */
export const getAllUsers = async () => {
    const [rows] = await pool.query(`
        SELECT u.idUsuario, u.nombre, u.correo, u.id_rol, r.nombreRol
        FROM usuarios u
        INNER JOIN roles r ON u.id_rol = r.idRol
        ORDER BY u.idUsuario ASC
    `);
    return rows;
};

/* ----------------------- CREAR USUARIO ----------------------- */
export const createUser = async ({ nombre, correo, contrasena, id_rol }) => {
    const [result] = await pool.query(`
        INSERT INTO usuarios (nombre, correo, contrasena, id_rol)
        VALUES (?, ?, ?, ?)
    `, [nombre, correo, contrasena, id_rol]);

    return result.insertId;
};

/* ----------------------- BUSCAR USUARIO POR CORREO ----------------------- */
export const findUserByEmail = async (correo) => {
    const [rows] = await pool.query(`
        SELECT * FROM usuarios WHERE correo = ?
    `, [correo]);

    return rows[0] || null;
};

/* ----------------------- BUSCAR USUARIO POR ID ----------------------- */
export const findUserById = async (id) => {
    const [rows] = await pool.query(`
        SELECT * FROM usuarios WHERE idUsuario = ?
    `, [id]);

    return rows[0] || null;
};

/* ----------------------- ACTUALIZAR USUARIO ----------------------- */
export const updateUser = async (id, { nombre, correo, id_rol }) => {
    const [result] = await pool.query(`
        UPDATE usuarios
        SET nombre = ?, correo = ?, id_rol = ?
        WHERE idUsuario = ?
    `, [nombre, correo, id_rol, id]);

    return result.affectedRows > 0;
};

/* ----------------------- ELIMINAR USUARIO ----------------------- */
export const deleteUser = async (id) => {
    const [result] = await pool.query(`
        DELETE FROM usuarios WHERE idUsuario = ?
    `, [id]);

    return result.affectedRows > 0;
};
