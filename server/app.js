import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import streamifier from 'streamifier';
import { check, validationResult } from 'express-validator';
import bcryptjs from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';
import grid from 'gridfs-stream';
import fileUpload from 'express-fileupload';
import bodyParser from 'body-parser';

import authRouter from './routes/auth.routes.js';
import userRouter from './routes/user.routes.js';
import eventRouter from './routes/event.routes.js';
// import photosRouter from './routes/photo.routes.js';
import Event from './models/Event.js';
import User from './models/User.js';
import { paginatedResult } from './middleware/pagination.middleware.js';

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionSuccessStatus: 200,
};

const app = express();
const PORT = process.env.PORT || 5000;

let gfs;
let bucket;

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  fileUpload({
    createParentPath: true,
  })
);

// SIGNUP
app.post(
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
      const newUser = new User({
        username,
        email,
        password: hashPassword,
      });

      const createdUser = await newUser.save();

      res
        .status(201)
        .json({ message: 'User was successfully created!', data: createdUser });
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong, try again.' });
    }
  }
);

// GET USERS
app.get('/users', paginatedResult(User), (req, res) => {
  res.json(res.paginatedResults);
});

// GET USER DATA (ID)
app.get('/user/:id', async (req, res) => {
  const userId = req.params.id;

  try {
    const userData = await User.findById(userId);

    res.status(200).json(userData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// GET EVENTS
app.get('/events/all-events', paginatedResult(Event), (req, res) => {
  res.json(res.paginatedResults);
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

// GET IMAGE
app.get('/image/:uuid', async (req, res) => {
  let id = req.params.uuid;
  res.setHeader('Content-disposition', 'attachment; filename=' + id);

  bucket
    .openDownloadStreamByName(id)
    .pipe(res)
    .on('error', function (error) {
      console.log('error' + error);
      res.status(404).json({
        msg: error.message,
      });
    })
    .on('finish', function () {
      console.log('GET done!');
    });
});

// POST IMAGE
app.post('/profile/photo', async (req, res) => {
  const uuid = uuidv4();

  const stream = bucket.openUploadStream(uuid);

  streamifier
    .createReadStream(req.files.image.data)
    .pipe(stream)
    .on('error', function (error) {
      assert.ifError(error);
    })
    .on('finish', function () {
      console.log('POST done!');

      res.status(200).json({
        urlPhoto: `${process.env.URL_PORT}image/${uuid}`,
      });
    });
});

async function start() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    const db = mongoose.connection;

    // db.once('open', async (err, res) => {
    //   if ((await Event.countDocuments().exec()) > 0) {
    //     return console.log(err);
    //   }
    //   Promise.all([Event]).then(() => console.log('Added Users'));
    // });

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
