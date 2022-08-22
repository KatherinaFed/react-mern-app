import Event from '../models/Event.js';


export const getEvents = async (req, res) => {

  try {
    const eventData = await Event.find();

    res.status(200).json(eventData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createEvent = async (req, res) => {
  const event = req.body;
  const newEvent = new Event(event);

  try {
    await newEvent.save();
    res.status(200).json(newEvent);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

let bucket;

export const getImageEvent = (req, res) => {
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
};

export const addImageEvent = async (req, res) => {
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
};
