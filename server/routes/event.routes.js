import express from 'express';
import { addImageEvent, createEvent, getEvents, getImageEvent } from '../controllers/events.js';

const router = express.Router();

router.get('/all-events', getEvents);
router.post('/all-events', createEvent);
router.get('/image/:id', getImageEvent);
router.post('/image/:id', addImageEvent);

export default router;
