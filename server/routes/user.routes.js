import express from 'express';
import { paginatedResult } from '../middleware/pagination.middleware.js';
import User from '../models/User.js';

const router = express.Router();

// GET ALL USERS
app.get('/', paginatedResult(User), (req, res) => {
  res.json(res.paginatedResults);
});



export default router;
