import express from 'express';
import streamifier from 'streamifier';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

// GET PHOTO
router.get('/:uuid', async (req, res) => {
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

// POST PHOTO
router.post('/', async (req, res) => {
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

export default router;