import 'dotenv/config.js';
import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import { errorHandler } from './middleware/errorHandler.js';

// Routes
import productsRoutes from './routes/products.js';
import authRoutes from './routes/auth.js';
import cartRoutes from './routes/cart.js';

const app = express();

// connect to MongoDB
connectDB();

app.use(cors());
app.use(express.json());

// API routes
app.use('/api/products', productsRoutes);
app.use('/api', authRoutes);
app.use('/api/cart', cartRoutes);

// health check
app.get('/', (req, res) => res.send('ShoppyGlobe API running'));

// error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
