// models/productModels.js
import pool from "../db.js";

/* Obtener todos los productos con su categoría y restaurante*/
export const getAllProducts = async () => {
    const [rows] = await pool.query(`
        SELECT p.idProducto, p.nombreProducto, p.descripcion, p.precio, 
        p.disponible, 
        r.nombreRestaurante AS restaurante,
        c.nombreCategoria AS categoria
        FROM productos p
        INNER JOIN restaurantes r ON p.id_restaurante = r.idRestaurante
        INNER JOIN categorias c ON p.id_categoria = c.idCategoria
        ORDER BY p.idProducto DESC
    `);
    return rows;
};

/* Obtener un producto por ID*/
export const getProductById = async (id) => {
    const [rows] = await pool.query(`
        SELECT p.*, 
        r.nombreRestaurante AS restaurante,
        c.nombreCategoria AS categoria
        FROM productos p
        INNER JOIN restaurantes r ON p.id_restaurante = r.idRestaurante
        INNER JOIN categorias c ON p.id_categoria = c.idCategoria
        WHERE p.idProducto = ?
    `, [id]);

    return rows[0];
};

/* Crear un producto*/
export const createProduct = async (data) => {
    const {
        nombreProducto,
        descripcion,
        precio,
        disponible = "Si",
        id_restaurante,
        id_categoria
    } = data;

    const [result] = await pool.query(`
        INSERT INTO productos 
            (nombreProducto, descripcion, precio, disponible, id_restaurante, id_categoria)
        VALUES (?, ?, ?, ?, ?, ?)
    `, [
        nombreProducto,
        descripcion,
        precio,
        disponible,
        id_restaurante,
        id_categoria
    ]);

    return { id: result.insertId, ...data };
};

/* Actualizar un producto*/
export const updateProduct = async (id, data) => {
    const {
        nombreProducto,
        descripcion,
        precio,
        disponible,
        id_restaurante,
        id_categoria
    } = data;

    const [result] = await pool.query(`
        UPDATE productos 
        SET nombreProducto = ?, descripcion = ?, precio = ?, disponible = ?, 
            id_restaurante = ?, id_categoria = ?
        WHERE idProducto = ?
    `, [
        nombreProducto,
        descripcion,
        precio,
        disponible,
        id_restaurante,
        id_categoria,
        id
    ]);

    return result.affectedRows > 0;
};


/* Eliminar un producto*/

export const deleteProduct = async (id) => {
    const [result] = await pool.query(`
        DELETE FROM productos WHERE idProducto = ?
    `, [id]);

    return result.affectedRows > 0;
};