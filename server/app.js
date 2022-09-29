import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import grid from 'gridfs-stream';
import fileUpload from 'express-fileupload';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import authRouter from './routes/auth.routes.js';
import userRouter from './routes/user.routes.js';
import eventRouter from './routes/event.routes.js';
import profileRouter from './routes/profile.route.js';
import photoRouter from './routes/photo.routes.js';

const corsOptions = {
  origin: process.env.CORS_ORIGIN,
  credentials: true,
  optionSuccessStatus: 200,
  allowedHeaders: 'X-Requested-With, Content-Type, Authorization',
  methods: 'GET, POST, PATCH, PUT, POST, DELETE, OPTIONS',
};

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  fileUpload({
    createParentPath: true,
  })
);

// AUTH
app.use('/api/auth', authRouter);

// USERS
app.use('/api/users', userRouter);

// PROFILE
app.use('/api/profile', profileRouter);

// EVENTS
app.use('/api/events', eventRouter);

// PHOTO
app.use('/api/photo', photoRouter);

let gfs;
let bucket;

async function start() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    //////////////////////////////////////////
    const db = mongoose.connection;

    bucket = new mongoose.mongo.GridFSBucket(db.db, {
      bucketName: 'bucket_name',
    });
    gfs = grid(db.db, mongoose.mongo);
    gfs.collection('bucket_name');

    console.log('Mongo state: ' + db.readyState);
    //////////////////////////////////////////

    app.listen(PORT, () => console.log(`App has been started on ${PORT}...`));
  } catch (error) {
    console.log('Server Error', error.message);
    process.exit(1);
  }
}

start();
