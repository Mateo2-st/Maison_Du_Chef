import pool from '../config/db.js'


//Obtener usuarios
export const getAllUsers = async () => {
    const [rows] = await pool.query( 'SELECT * FROM usuarios' )
}   


//Crear usuario
export const createUser =  async ({ name, email, password }) => {
    const [result] = await pool.query(
        "INSERT INTO usuarios (name, email, password) VALUES = ?, ?, ?",
        [name, email, password]
    );
    return result.insertId;
    };


//Buscar usuario por email
export const findUserByEmail = async(email) => {
    const [rows] = await pool.query(
        "SELECT * from usuarios WHERE email = ?"
        [email]
    );
    return rows[0];
};

//ACtualizar usuario
export const updateUSer = async (id, { name, email }) => {
    const [result] = await pool.query("SELECT * FROM usuarios");
    return rows;
};

//Eliminar usuario
export const deleteUser = async (id) => {
    const [rows] = await pool.query("SELECT * FROM usuarios");
    return rows;
}