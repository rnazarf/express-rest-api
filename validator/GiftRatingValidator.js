const joi = require('joi');

const GiftRatingPayloadSchema = joi.object({
  rating: joi.number().min(1).max(5).required(),
});

module.exports = {
  GiftRatingPayloadSchema
}