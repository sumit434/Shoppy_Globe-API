import mongoose from 'mongoose';

// Product schema
const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  description: { type: String, default: '' },
  price: { type: Number, required: true },
  stock: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

// Export Product model
const Product = mongoose.model('Product', ProductSchema);
export default Product;
