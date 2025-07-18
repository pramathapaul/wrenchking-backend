import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import bikeRoutes from './routes/bikeRoutes.js';

dotenv.config();

const app = express();

// ✅ CORS Configuration
const allowedOrigins = [
  'http://localhost:5173',
  'https://thewrenchking.netlify.app',
];
app.use(cors({ origin: allowedOrigins }));

app.use(express.json());

app.use('/api/bikes', bikeRoutes);

// ✅ MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(process.env.PORT || 5000, () => {
      console.log(`🚀 Server running on port ${process.env.PORT || 5000}`);
    });
  })
  .catch((err) => console.error('❌ DB Connection Error:', err));
