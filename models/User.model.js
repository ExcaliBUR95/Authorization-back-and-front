const mongoose = require("mongoose");

const userShcema = mongoose.Schema({
  login: {
    type: String,
    unique: true,
  },
  password: String,
});

const User = mongoose.model("User", userShcema);

module.exports = User;
