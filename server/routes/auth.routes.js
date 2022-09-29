import 'dotenv/config';
import express from 'express';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { check, validationResult } from 'express-validator';
import User from '../models/User.js';
import authMiddleware from '../middleware/auth.middleware.js';
import { generateTokens } from '../utils/generateTokens.js';
import { verifyRefreshToken } from '../utils/verifyRefreshToken.js';

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

      // check if user already exist
      const existingUser = await User.findOne({ email });

      if (existingUser) {
        return res
          .status(400)
          .json({ message: `User with email ${email} has already exist` });
      }

      // encrypt user password
      const hashPassword = await bcryptjs.hash(password, 8);

      // create user in DB
      const newUser = new User({
        username,
        email,
        password: hashPassword,
      });

      // save new User
      await newUser.save();

      res
        .status(201)
        .json({ message: 'User was successfully created!', data: newUser });
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

      // validate if user exists in DB
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: 'User has not found.' });
      }

      // user ID
      const userId = user._id.toString();

      // validate if passwords match
      const isPassMatch = await bcryptjs.compare(password, user.password);
      if (!isPassMatch) {
        return res.status(400).json({ message: 'Invalid password.' });
      }

      // generate TOKENS
      const { accessToken, refreshToken } = await generateTokens(user);

      res.status(200).json({
        user: {
          id: userId,
          username: user.username,
          email: user.email,
        },
        accessToken,
        refreshToken,
        status: 'OK',
        message: 'Logged in successfully!',
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Something went wrong, try again.' });
    }
  }
);

// LOGOUT
router.delete('/logout', async (req, res) => {
  try {
    const userToken = await User.findOne({ token: req.body.refreshToken });
    if (!userToken)
      return res
        .status(200)
        .json({ error: false, message: 'Logged Out Sucessfully' });

    await userToken.remove();
    res.status(200).json({ error: false, message: 'Logged Out Sucessfully' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: true, message: 'Internal Server Error' });
  }
});

// REFRESH TOKEN
router.post('/token', async (req, res) => {
  const { refreshToken } = req.body;

  verifyRefreshToken(refreshToken)
    .then(({ tokenDetails }) => {
      const accessToken = jwt.sign(
        { id: tokenDetails.id },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: process.env.ACCESS_TOKEN_EXPIRES_TIME }
      );

      res.status(200).json({
        error: false,
        accessToken,
        message: 'Access token created successfully',
      });
    })
    .catch((err) => res.status(400).json(err));
});

// AUTH/ME
router.get('/me', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    // generate TOKENS
    const { accessToken, refreshToken } = await generateTokens(user);

    res.status(200).json({
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
      accessToken,
      refreshToken,
      message: 'Welcome 🙌',
    });
  } catch (error) {
    console.log(error);
    res.send({ message: 'Server error' });
  }
});

export default router;
