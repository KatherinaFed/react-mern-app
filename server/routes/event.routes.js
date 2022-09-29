import express from 'express';
import { paginatedResult } from '../middleware/pagination.middleware.js';
import Event from '../models/Event.js';

const router = express.Router();

// GET EVENTS
router.get('/all-events', paginatedResult(Event), (req, res) => {
  res.json(res.paginatedResults);
});

// CREATE EVENT
router.post('/all-events', async (req, res) => {
  const event = req.body;
  const newEvent = new Event(event);

  try {
    await newEvent.save();
    res.status(200).json(newEvent);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
});

export default router;
