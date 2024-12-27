const mongoose = require('mongoose');
const { type } = require('../validation/userValidation');
const { boolean } = require('joi');

const userSchema = new mongoose.Schema({
  name: String,
  dob: Date,
  email: String,
  phone: String,
  age: String,
  gender: String,
  height: String,
  weight: String,
  profession: String,
  education: String,
  address: String,
  city: String,
  salary: String,
  fatherName: String,
  fatherOccupation: String,
  motherName: String,
  motherOccupation: String,
  fMember: String,
  aIncome: String,
  jointFamily: Boolean,
  handicapped: Boolean,
  religion: String,
  cast: String,
  subCast: String,
  aboutMe: String,
  status: String,
  password: String,
  image: String,
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
