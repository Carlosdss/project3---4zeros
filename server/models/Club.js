const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clubSchema = new Schema({
  name: String,
  location: String,
  position : { type: { type: String }, coordinates: [Number] }
});

clubSchema.index({position: '2dsphere' });

module.exports = mongoose.model('Club', clubSchema);
