const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    uppercase: true,
    required: true,
  },
  lastName: {
    type: String,
    uppercase: true,
    required: true,
  },
  zip: {
    type: String,
    minlength: 5,
    maxlength: 9,
    required: true,
    validate: {
      validator: function (v) {
        return /\d/.test(v);
      },
      message: (props) => `${props.value} invalid zip`,
    },
  },
});

module.exports = User = mongoose.model("User", UserSchema);
