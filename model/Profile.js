const mongoose = require("mongoose");

const ProfileSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "username is required"],
    match: [/^[a-zA-Z0-9]+$/]
  },
  password: {
    type: String,
    required: [true, "password is required"],
    minlength: 6
  }
});

module.exports = Profile = mongoose.model("userProfile", ProfileSchema);
