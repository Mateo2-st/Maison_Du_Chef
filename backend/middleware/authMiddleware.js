import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization || '';
    const token = authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;
    if (!token) return res.status(401).json({ msg: 'No token, acceso denegado' });

    try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload; // payload puede tener { idUsuario, id_rol, correo, ... }
    next();
    } catch (err) {
    return res.status(401).json({ msg: 'Token inválido' });
    }
};
