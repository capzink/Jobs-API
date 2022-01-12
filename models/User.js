const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, " name is require"],
    minlenght: 3,
    maxlength: 20,
  },
  email: {
    type: String,
    required: [true, "email is require"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please Provide an email",
    ],
    unique: true,
  },
  password: {
    type: String,
    required: [true,' please provide a password'],
    minlenght: 8,
  },
});

module.export = mongoose.model("User", userSchema);
