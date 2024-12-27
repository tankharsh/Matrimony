const Joi = require('joi');

const userValidationSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  dob: Joi.date().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().min(10).max(15).required(),
  age: Joi.string().required(),
  gender: Joi.string().valid('Male', 'Female').required(),
  height: Joi.string().required(),
  weight: Joi.string().required(),
  profession: Joi.string().required(),
  education: Joi.string().required(),
  address: Joi.string().required(),
  city: Joi.string().required(),
  salary: Joi.string().required(),
  fatherName: Joi.string().required(),
  fatherOccupation: Joi.string().required(),
  motherName: Joi.string().required(),
  motherOccupation: Joi.string().required(),
  fMember: Joi.string().required(),
  aIncome: Joi.string().required(),
  jointFamily: Joi.boolean().required(),
  handicapped: Joi.boolean().required(),
  religion: Joi.string().required(),
  cast: Joi.string().required(),
  subCast: Joi.string().required(),
  aboutMe: Joi.string().max(500),
  status: Joi.string().valid('Single', 'Divorce', 'Widowed').required(),
  password: Joi.string().min(4).required(),
  image: Joi.string().optional(),
});

module.exports = userValidationSchema;
