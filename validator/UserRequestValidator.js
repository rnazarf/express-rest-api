const joi = require('joi');

const UserCreatePayloadSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().required(),
});

const UserUpdatePayloadSchema = joi.object({
  name: joi.string(),
  email: joi.string().email(),
  password: joi.string(),
});

module.exports = {
  UserCreatePayloadSchema,
  UserUpdatePayloadSchema,
};