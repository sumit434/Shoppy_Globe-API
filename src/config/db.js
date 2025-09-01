import mongoose from 'mongoose';

// Connect to MongoDB
export default async function connectDB(mongoUri) {
  try {
    // Use provided URI or fallback to .env
    const uri = mongoUri || process.env.MONGO_URI;
    // Establish connection
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB connected');
  } catch (err) {
    // Log and exit if connection fails
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  }
}
