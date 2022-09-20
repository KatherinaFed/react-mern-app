import pkg from 'mongoose';
const { Schema, model } = pkg;

const schemaUser = new Schema({
  username: {
    type: String,
    required: [true, "can't be blank"],
  },
  email: {
    type: String,
    lowercase: true,
    required: [true, "can't be blank"],
  },
  password: String,
  location: String,
  avatar: String,
  sport: [String],
  followers: [Object],
  following: [Object],
  events: [Object],
  contacts: Object,
  token: String,
});

const User = model('User', schemaUser);

export default User;
