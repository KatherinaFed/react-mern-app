import 'dotenv/config';
const { Router } = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const authMiddleware = require('../middleware/auth.middleware');
const router = new Router();

// api/auth/registration
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

      const hashPassword = await bcryptjs.hash(password, 8);
      const newUser = new User({ username, email, password: hashPassword });

      await newUser.save();

      res.status(201).json({ message: 'User was successfully created!' });
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong, try again.' });
    }
  }
);

// api/auth/login
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

module.exports = router;
