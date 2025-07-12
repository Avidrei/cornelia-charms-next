import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import uploadRoute from './routes/uploadRoute.js';
import reviewRoute from './routes/reviewRoute.js';
import messageRoute from './routes/messageRoute.js';
import authRoute from './routes/authenticationRoute.js';

dotenv.config();

const app = express();


const allowedOrigins = [
  'http://localhost:3000',
  'https://cornelia-charms-next.vercel.app', 
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

app.use(express.json());

// Routes
app.use('/api/auth', authRoute);
app.use('/api/upload', uploadRoute);
app.use('/api/reviews', reviewRoute);
app.use('/api/messages', messageRoute);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
