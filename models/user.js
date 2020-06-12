const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email:{
    type: String,
    required: true
  },
  password: {
    type: String, 
    required: true
  },
  firstName:{
    type: String,
    uppercase: true, 
    required: true
  },
  lastName: {
    type: String,
    uppercase: true,
    required:true
  },
  zipCode:{
    type: String, 
    required: true
  }
}
);

module.exports = User = mongoose.model('User', UserSchema);