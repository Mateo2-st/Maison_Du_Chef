// models/ventasModel.js
import pool from "../db.js";

/* ------------------------------------------------------------------------- */
/*                                   PEDIDOS                                 */
/* ------------------------------------------------------------------------- */

/** Obtener todos los pedidos */
export const getAllPedidos = async () => {
    const [rows] = await pool.query(`
        SELECT p.idPedido, p.id_usuario, p.direccion, p.fechaPedido,
        p.estado, u.nombre AS usuario
        FROM pedidos p
        INNER JOIN usuarios u ON p.id_usuario = u.idUsuario
        ORDER BY p.idPedido DESC
    `);

    return rows;
};

/** Obtener un pedido por ID con detalles y pago */
export const getPedidoById = async (id) => {
    // Pedido base
    const [pedidoRows] = await pool.query(`
        SELECT * FROM pedidos WHERE idPedido = ?
    `, [id]);

    if (pedidoRows.length === 0) return null;

    const pedido = pedidoRows[0];

    // Detalles del pedido
    const [detalles] = await pool.query(`
        SELECT d.*, p.nombreProducto, p.precio
        FROM detalles_pedido d
        INNER JOIN productos p ON d.id_producto = p.idProducto
        WHERE d.id_pedido = ?
    `, [id]);

    // Pago
    const [pago] = await pool.query(`
        SELECT * FROM pagos WHERE id_pedido = ?
    `, [id]);

    return {
        ...pedido,
        detalles,
        pago: pago[0] || null
    };
};

/** Crear un pedido */
export const createPedido = async (data) => {
    const { id_usuario, direccion, fechaPedido, estado = "pendiente" } = data;

    const [result] = await pool.query(`
        INSERT INTO pedidos (id_usuario, direccion, fechaPedido, estado)
        VALUES (?, ?, ?, ?)
    `, [id_usuario, direccion, fechaPedido, estado]);

    return { idPedido: result.insertId, ...data };
};

/** Actualizar pedido */
export const updatePedido = async (id, data) => {
    const { direccion, fechaPedido, estado } = data;

    const [result] = await pool.query(`
        UPDATE pedidos
        SET direccion = ?, fechaPedido = ?, estado = ?
        WHERE idPedido = ?
    `, [direccion, fechaPedido, estado, id]);

    return result.affectedRows > 0;
};

/** Eliminar pedido */
export const deletePedido = async (id) => {
    const [result] = await pool.query(`
        DELETE FROM pedidos WHERE idPedido = ?
    `, [id]);

    return result.affectedRows > 0;
};


/* ------------------------------------------------------------------------- */
/*                            DETALLES DE PEDIDO                             */
/* ------------------------------------------------------------------------- */

/** Insertar detalle de pedido */
export const addDetallePedido = async (id_pedido, id_producto, cantidad) => {
    const [result] = await pool.query(`
        INSERT INTO detalles_pedido (id_pedido, id_producto, cantidad)
        VALUES (?, ?, ?)
    `, [id_pedido, id_producto, cantidad]);

    return { idDetalle: result.insertId, id_pedido, id_producto, cantidad };
};

/** Eliminar todos los detalles de un pedido */
export const deleteDetallesByPedido = async (id_pedido) => {
    const [result] = await pool.query(`
        DELETE FROM detalles_pedido WHERE id_pedido = ?
    `, [id_pedido]);

    return result.affectedRows > 0;
};


/* ------------------------------------------------------------------------- */
/*                                   PAGOS                                    */
/* ------------------------------------------------------------------------- */

/** Registrar un pago */
export const createPago = async (data) => {
    const { id_pedido, metodo, monto, fecha } = data;

    const [result] = await pool.query(`
        INSERT INTO pagos (id_pedido, metodo, monto, fecha)
        VALUES (?, ?, ?, ?)
    `, [id_pedido, metodo, monto, fecha]);

    return { idPago: result.insertId, ...data };
};

/** Obtener pago por pedido */
export const getPagoByPedido = async (id_pedido) => {
    const [rows] = await pool.query(`
        SELECT * FROM pagos WHERE id_pedido = ?
    `, [id_pedido]);

    return rows[0] || null;
};
