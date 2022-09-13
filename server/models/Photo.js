import mongoose from 'mongoose';

// const PhotoSchema = mongoose.Schema({
//   photo: {
//     type: Buffer
//   }
// });

// PhotoSchema.methods.toJSON = function () {
//   const result = this.toObject();
//   delete result.photo;
//   return result;
// };

// const Photo = mongoose.model('Photo', PhotoSchema);

// module.exports = Photo;

const PhotoSchema = new mongoose.Schema({
  img: {
    data: Buffer,
    contentType: String,
  },
});

//Image is a model which has a schema imageSchema

const Photo = mongoose.model('Photo', PhotoSchema);

module.exports = Photo;
