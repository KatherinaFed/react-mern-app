import pkg from 'mongoose';
const { Schema, model } = pkg;

const schemaUser = new Schema({
  id: String,
  username: String,
  location: String,
  avatar: String,
  sport: [String],
  followers: [Object],
  following: [Object],
  events: [Object],
  contacts: Object,
});

const User = model('User', schemaUser);

export default User;
