import express from 'express';

const router = express.Router();

router.post('/', (req, res) => {
  res.send('Upload endpoint working!');
});

export default router;