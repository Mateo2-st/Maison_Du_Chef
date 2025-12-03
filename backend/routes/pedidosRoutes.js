import express from 'express';
import {
    listProducts,
    getProduct,
    addProduct,
    editProduct,
    removeProduct,
} from '../controllers/productController.js'


import { verifyToken } from '../middleware/authMiddleware.js'
import { requireRole } from '../middleware/roleMiddleware';

const router = express.Router();



router.get('/', listProducts);
router.get('id:id', getProduct);

