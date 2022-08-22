import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import streamifier from 'streamifier';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import userRouter from './routes/user.routes.js';
import eventRouter from './routes/event.routes.js';

import grid from 'gridfs-stream';

import fileUpload from 'express-fileupload';
import bodyParser from 'body-parser';
import Event from './models/Event.js';
import { paginatedResult } from './middleware/pagination.middleware.js';
import User from './models/User.js';

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionSuccessStatus: 200,
};

const app = express();
const PORT = process.env.PORT || 5000;

let gfs;
let bucket;


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  fileUpload({
    createParentPath: true,
  })
);
// app.use('/api/auth', authRouter);

// GET USERS
app.get('/users', async (req, res) => {
  try {
    const userData = await User.find();

    res.status(200).json(userData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// GET EVENTS
app.get('/events', async (req, res) => {
  try {
    const eventData = await Event.find();

    res.status(200).json(eventData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// CREATE EVENT
app.post('/events/all-events', async (req, res) => {
  const event = req.body;
  const newEvent = new Event(event);

  try {
    await newEvent.save();
    res.status(200).json(newEvent);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
});

// PAGINATION
app.get('/events/all-events', paginatedResult(Event), (req, res) => {
  res.json(res.paginatedResults);
});

// GET IMAGE
app.get('/events/image/:id', (req, res) => {
  let id = req.params.id;
  console.log(id);
  res.setHeader('Content-disposition', 'attachment; filename=' + 'image_' + id);

  bucket
    .openDownloadStreamByName('image_' + id)
    .pipe(res)
    .on('error', function (error) {
      console.log('error' + error);
      res.status(404).json({
        msg: error.message,
      });
    })
    .on('finish', function () {
      console.log('done!');
    });
});

// POST IMAGE
app.post('/events/image/:id', async (req, res) => {
  let id = req.params.id;

  streamifier
    .createReadStream(req.files.avatar.data)
    .pipe(bucket.openUploadStream('image_' + id))
    .on('error', function (error) {
      assert.ifError(error);
    })
    .on('finish', function () {
      console.log('done!');
      res.status(200).json({
        success: true,
        msg: 'File Uploaded successfully..',
      });
    });
});

async function start() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    const db = mongoose.connection;

    db.once('open', async (err, res) => {
      if ((await Event.countDocuments().exec()) > 0) {
        return console.log(err);
      }
      Promise.all([Event]).then(() => console.log('Added Users'));
    });

    bucket = new mongoose.mongo.GridFSBucket(db.db, {
      bucketName: 'bucket_name',
    });
    gfs = grid(db.db, mongoose.mongo);
    gfs.collection('bucket_name');

    console.log('Mongo state: ' + db.readyState);

    app.listen(PORT, () => console.log(`App has been started on ${PORT}...`));
  } catch (error) {
    console.log('Server Error', error.message);
    process.exit(1);
  }
}

start();
