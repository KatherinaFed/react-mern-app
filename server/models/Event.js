import pkg from 'mongoose';
const { Schema, model } = pkg;

const eventSchema = new Schema({
  activity: {
    label: { type: String },
    value: { type: String },
  },
  title: String,
  description: String,
  date: Number,
  time: Number,
  location: {
    label: { type: String },
    value: { type: String },
  },
  creator: String,
  img: String,
});

const Event = model('Event', eventSchema);

export default Event;
