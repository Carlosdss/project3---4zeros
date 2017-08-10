const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Order = new Schema({
  beverages: [{ref: 'Beverage', type: Schema.Types.ObjectId,}],
  user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
  date: Date,
  club: String
});

module.exports = mongoose.model('Beverage', beverageSchema);
