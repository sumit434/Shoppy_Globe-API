import express from 'express';
import * as productsController from '../controllers/productsController.js';

const router = express.Router();

// GET /api/products
router.get('/', productsController.getProducts);

// GET /api/products/:id
router.get('/:id', productsController.getProductById);

export default router;
