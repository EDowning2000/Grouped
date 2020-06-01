const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  photo:{},
  eventName:{type: String, required: true},
  eventHost:{type: String, required: true},
  maxGuests: {type: String, required:true},
  description: {type: String, required: true},
  zipCode:{type: String, required: true},
  date:{type: Date, default: Date.now},
  time:{type: String, required: true}
})