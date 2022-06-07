const joi = require('joi');

const GiftCreatePayloadSchema = joi.object({
  name: joi.string().required(),
  description: joi.string().required(),
  price: joi.number().required(),
  image: joi.any(),
  stock: joi.number().required(),
});

const GiftUpdatePayloadSchema = joi.object({
  name: joi.string().required(),
  description: joi.string().required(),
  price: joi.number().required(),
  image: joi.any(),
});

module.exports = {
  GiftCreatePayloadSchema,
  GiftUpdatePayloadSchema
}