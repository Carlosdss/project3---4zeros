const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const beverageSchema = new Schema({
  size: {
    type: String,
    enum: ['Shot', 'Regular', 'Soft'],
    required: true
  },
  alcohol: String,
  brand: String,
  soft: String,
  club: {type: String, required: true},
  //club: {type: Schema.Types.ObjectId, ref: 'Club'},
  number: Number,
  user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
});

module.exports = mongoose.model('Beverage', beverageSchema);
