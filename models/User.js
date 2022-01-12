const mongoose = require('mongoose')
const bycrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')

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
    minlenght: 6,
  },
});

userSchema.pre('save', async function(){
  const salt =await bycrypt.genSalt(10)
  this.password = await bycrypt.hash(this.password,salt)
  
})

userSchema.methods.createJWT = function(){
  return jwt.sign({userId:this._id,name:this.name},process.env.JWT_SECRET,{expiresIn: process.env.JWT_LIFETIME,})
}

userSchema.methods.comparePassword= async function (passwordcheck){
  const isMatch = await bycrypt.compare(passwordcheck,this.password);
  return isMatch

}

module.exports = mongoose.model("User", userSchema);
