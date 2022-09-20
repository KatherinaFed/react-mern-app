import express from 'express';
import User from '../models/User.js';

const router = express.Router();

// GET PROFILE DATA (ID)
router.get('/:id', async (req, res) => {
  const userId = req.params.id;

  try {
    const userData = await User.findById(userId);

    res.status(200).json(userData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// PUT NEW PROFILE DATA (UPDATE)
router.put('/', async (req, res) => {
  console.log('UPDATE PROFILE BODY: ', req.body.data);

  try {
    await User.findOneAndUpdate({ _id: req.body.id }, req.body.data);

    res.status(200).json({ message: 'User was successfully updated!' });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;