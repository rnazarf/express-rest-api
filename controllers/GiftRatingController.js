const GiftRatingService = require('@services/gift/RatingService');
const ratingService = new GiftRatingService();
const { GiftRatingPayloadSchema } = require('../validator/GiftRatingValidator');
const { successRes, errorRes } = require('@common/response');

class GiftRatingController {
  async addRating(req, res) {
    try {
      const validate = GiftRatingPayloadSchema.validate(req.body);

      if (validate.error) return errorRes(res, validate.error.message, "Invalid payload", 400);

      const user_id = req.user.id;
      const { id } = req.params;
      const { rating } = req.body;

      const gift = await ratingService.createRating(id, user_id, rating);
      return successRes(res, gift);
    } catch (error) {
      return errorRes(res, error, error.message);
    }
  }
}

module.exports = GiftRatingController;