import 'dotenv/config';
import express from 'express';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken'
import { check, validationResult } from 'express-validator';
import { v4 as uuidv4 } from 'uuid';
import User from '../models/User.js';
import authMiddleware from '../middleware/auth.middleware.js';

const router = express.Router();

// SIGNUP
router.post(
  '/signup',
  [
    check('username').notEmpty(),
    check('email', 'Incorrect email').isEmail(),
    check(
      'password',
      'Password must at least 6 characters and shorter than 12'
    ).isLength({ min: 6, max: 12 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res
          .status(400)
          .json({ message: 'Incorrect registration data', errors });
      }

      const { username, email, password } = req.body;

      const candidate = await User.findOne({ email });

      if (candidate) {
        return res
          .status(400)
          .json({ message: `User with email ${email} has already exist` });
      }

      // ID for a new user
      const userId = uuidv4();

      const hashPassword = await bcryptjs.hash(password, 8);
      const newUser = new User({
        id: userId,
        username,
        email,
        password: hashPassword,
      });

      console.log('NEW USER: ', newUser)

      await newUser.save();

      res.status(201).json({ message: 'User was successfully created!' });
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong, try again.' });
    }
  }
);

// LOGIN
router.post(
  '/login',
  [
    check('email', 'Email is not valid').normalizeEmail().isEmail(),
    check('password', 'Enter a password').exists(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          message: 'Login failed. Please check your email and password.',
          errors: errors.array(),
        });
      }

      const { email, password } = req.body;

      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: 'User has not found.' });
      }
      const isPassMatch = await bcryptjs.compare(password, user.password);

      if (!isPassMatch) {
        return res.status(400).json({ message: 'Invalid password.' });
      }

      const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
        expiresIn: '1h',
      });

      res.json({
        token,
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
        },
      });
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong, try again.' });
    }
  }
);

// IS AUTH
router.get('/me', authMiddleware, async (req, res) => {
  try {
    const user = await User.findOne({ id: req.user.id });
    const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
      expiresIn: '1h',
    });
    return res.json({
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (e) {
    console.log(e);
    res.send({ message: 'Server error' });
  }
});

export default router;
