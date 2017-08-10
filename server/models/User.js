const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  lastName: String,
  email: String,
  password: String,
  dateOfBirth: Date,
  cityOfResidence: String,
  mobileNumber: Number,
  role: {
    type: String,
    enum: [
      'client',
      'waitress'
    ]
  },
  accessToken: String,
  facebookID: String,
  club: {type: Schema.Types.ObjectId, ref: 'Club'},
  user: {type: Schema.Types.ObjectId, ref: 'User'}
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
