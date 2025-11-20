import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';

import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import restauranteRoutes from './routes/restauranteRoutes.js';
import categoriaRoutes from './routes/categoriaRoutes.js';
import productoRoutes from './routes/productoRoutes.js';
import pedidoRoutes from './routes/pedidoRoutes.js';
import pagoRoutes from './routes/pagoRoutes.js';
import resenaRoutes from './routes/resenaRoutes.js';

import errorHandler from './middleware/errorHandler.js';

dotenv.config();
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

// static pages (si tienes frontend/pages)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const frontendPages = path.join(__dirname, '..', 'frontend', 'pages');
app.use('/pages', express.static(frontendPages));

// rutas
app.use('/api/auth', authRoutes);
app.use('/api/usuarios', userRoutes);
app.use('/api/restaurantes', restauranteRoutes);
app.use('/api/categorias', categoriaRoutes);
app.use('/api/productos', productoRoutes);
app.use('/api/pedidos', pedidoRoutes);
app.use('/api/pagos', pagoRoutes);
app.use('/api/resenas', resenaRoutes);

// manejador de errores global (debe ir al final)
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
