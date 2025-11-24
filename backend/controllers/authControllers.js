import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import { getRoleByName } from '../models/userModels.js';
import { createUser, findUserByEmail } from '../models/userModels.js';

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPRES_IN = process.env.JWT_EXPRES_IN || '2h';
const SALT_ROUNDS = 10;

export const register = async(req, res) => {
    try {
        const { nombre, email, password, role } = req.body;
        if (!nombre || !email || !password) {
            return res.status(400).json({ message: "Faltan campos" });
        }dotenv
        const roleName = role || "usuario";
        const roleObj = await getRoleByName(roleName);
        if(!roleObj) {
            return res.status(400).json({ message: "Rol no encontrado" });
        }

        //Verificar si vaya existe el email
    const existing = await findUserByEmail(email);
    if (existing) return res.statu(400).json ({ message: "Email ya registrado" });

    const hashed = await bcrypt.hash(password, SALT_ROUNDS);
    const id = await createUser(
        {nombre, email, password, hashed, role: roleObj.id});
    return res.status(201).json({ message: "Usuario creado", id});
    } catch(err) {
        console.error(err);
        return res.status(500).json({message: "Error del servidor"});
    }
};