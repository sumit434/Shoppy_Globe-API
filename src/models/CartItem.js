import mongoose from 'mongoose';

// Cart Schema
const CartItemSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true, min: 1 },
  createdAt: { type: Date, default: Date.now }
});

// Export as ES module
export default mongoose.model('CartItem', CartItemSchema);
