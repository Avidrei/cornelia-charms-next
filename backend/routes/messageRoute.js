import express from 'express';
import Message from '../models/messageModel.js';

const router = express.Router();


router.get('/all', async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.status(200).json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ message: 'Failed to fetch messages' });
  }
});

router.post('/', async (req, res) => {
  const { name, message } = req.body;

  try {
    const newMessage = new Message({ name, message });
    await newMessage.save();
    res.status(201).json({ message: 'Message saved successfully' });
  } catch (error) {
    console.error('Error saving message:', error);
    res.status(500).json({ message: 'Failed to save message' });
  }
});

export default router;
