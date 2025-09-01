import CartItem from '../models/CartItem.js';
import Product from '../models/Product.js';

// Add item to cart
export async function addToCart(req, res, next) {
  try {
    const { productId, quantity } = req.body;
    if (!productId || !quantity) return res.status(400).json({ message: 'productId and quantity required' });

    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    if (product.stock < quantity) return res.status(400).json({ message: 'Insufficient stock' });

    let item = await CartItem.findOne({ user: req.user._id, product: productId });
    if (item) {
      item.quantity += quantity; // update quantity
      await item.save();
    } else {
      item = new CartItem({ user: req.user._id, product: productId, quantity });
      await item.save();
    }

    res.status(201).json(item);
  } catch (err) {
    next(err);
  }
}

// Update cart item
export async function updateCartItem(req, res, next) {
  try {
    const { quantity } = req.body;
    const item = await CartItem.findById(req.params.id);
    if (!item) return res.status(404).json({ message: 'Cart item not found' });
    if (String(item.user) !== String(req.user._id)) return res.status(403).json({ message: 'Not authorized' });

    const product = await Product.findById(item.product);
    if (!product) return res.status(404).json({ message: 'Associated product not found' });
    if (product.stock < quantity) return res.status(400).json({ message: 'Insufficient stock' });

    item.quantity = quantity;
    await item.save();
    res.json(item);
  } catch (err) {
    next(err);
  }
}

// Remove cart item
export async function removeCartItem(req, res, next) {
  try {
    const item = await CartItem.findById(req.params.id);
    if (!item) return res.status(404).json({ message: 'Cart item not found' });
    if (String(item.user) !== String(req.user._id)) return res.status(403).json({ message: 'Not authorized' });

    await item.deleteOne();
    res.json({ message: 'Item removed' });
  } catch (err) {
    next(err);
  }
}
