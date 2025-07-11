import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js'; 

const router = express.Router();


router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    console.log('Login request for:', email);

    // 1. Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      console.log('User not found');
      return res.status(401).json({ message: 'There is no user with this email.' });
    }

    // 2. Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log('Password mismatch');
      return res.status(401).json({ message: 'Invalid password.' });
    }

    // 3. Create JWT
    if (!process.env.JWT_SECRET) {
      console.error('JWT_SECRET not defined in .env');
      return res.status(500).json({ message: 'Server misconfiguration' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    // 4. Respond with token and user info
    return res.status(200).json({
      token,
      user: {
        email: user.email,
        message: 'Login successful',
      },
    });
  } catch (err) {
    console.error('Login route error:', err);
    return res.status(500).json({ message: 'Server error' });
  }
});

export default router;
