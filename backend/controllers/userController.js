import { findUserById, getAllUsers } from '../models/userModels.js'

export const profile = async (req, res) => {
    try {
        const user = await findUserById(req.user.id);
        if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
        const { password, ...safeuser } = user;
        return res.json({ user: safeUser });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Error del servidor' });
    }
};

export const listUsers = async (req, res) => {
    try {
        const users = await getAllUsers();
        return res.json(users);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Error del servidor' })
    }
}