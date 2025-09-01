import 'dotenv/config.js';
import connectDB from '../config/db.js';
import Product from '../models/Product.js';

// In-memory product data (sample products to seed into MongoDB)
const products = [
  {
    name: 'Classic Tee',
    description: 'Comfortable cotton t-shirt',
    price: 1999,
    stock: 50,
    image: 'https://via.placeholder.com/150'
  },
  {
    name: 'Slim Jeans',
    description: 'Blue denim slim fit',
    price: 3999,
    stock: 25,
    image: 'https://via.placeholder.com/150'
  },
  {
    name: 'Sneakers',
    description: 'Lightweight running shoes',
    price: 4999,
    stock: 30,
    image: 'https://via.placeholder.com/150'
  }
];

// Seed function: clears old products and inserts new ones
const seed = async () => {
  try {
    await connectDB();             // connect to MongoDB
    await Product.deleteMany({});  // clear existing products
    await Product.insertMany(products); // insert sample products
    console.log('✅ Seeded sample products');
    process.exit(0);               // exit process on success
  } catch (err) {
    console.error(err);
    process.exit(1);               // exit with error
  }
};

seed(); // run the seeding function
