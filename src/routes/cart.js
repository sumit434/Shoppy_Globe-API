import express from 'express';
import auth from '../middleware/auth.js';
import * as cartController from '../controllers/cartController.js';

const router = express.Router();

// POST /api/cart - add item
router.post('/', auth, cartController.addToCart);

// PUT /api/cart/:id - update quantity
router.put('/:id', auth, cartController.updateCartItem);

// DELETE /api/cart/:id - remove item
router.delete('/:id', auth, cartController.removeCartItem);

export default router;
          