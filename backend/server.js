import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import uploadRoute from './routes/uploadRoute.js';
import reviewRoute from './routes/reviewRoute.js';
import messageRoute from './routes/messageRoute.js'; 

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); 
app.use('/api/upload', uploadRoute);
app.use('/api/reviews', reviewRoute);
app.use('/api/messages', messageRoute);

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
