const { Gift, GiftRating } = require('@models');

class RatingService {
  async createRating(giftId, userId, rating) {
    const gift = await Gift.findOne({
      where: {
        id: giftId,
      },
    });

    if (!gift) throw new Error('Gift not found');

    const getRatingGift = await GiftRating.findOne({
      where: {
        gift_id: giftId,
        user_id: userId,
      },
    });

    if (getRatingGift) {
      getRatingGift.rating = rating;
      return await getRatingGift.save();

    } else {
      const ratingGift = await GiftRating.create({
        gift_id: giftId,
        user_id: userId,
        rating,
      });

      if (!ratingGift) throw new Error('Failed to create rating');
      return ratingGift;
    }

  }

  async getRating(giftId) {
    return GiftRating.findOne({
      where: { gift_id: giftId },
      attributes: ['rating'],
      raw: true,
    });
  }
}

module.exports = RatingService;