const { Gift, GiftRedeem, sequelize } = require('@models');

class RedeemService {
  async createRedeem(giftId, qty, userId) {
    const t = await sequelize.transaction();

    try {
      const gift = await Gift.findOne({
        where: {
          id: giftId,
        },
      }, {
        transaction: t,
      });

      if (!gift) throw new Error('Gift not found');

      if (!gift.stock || qty > gift.stock) throw new Error('Gift is out of stock');

      const redeemGift = await GiftRedeem.create({
        gift_id: giftId,
        user_id: userId,
        qty: qty,
      }, {
        transaction: t,
      });

      if (!redeemGift) throw new Error('Failed to create redeem');

      const updateStock = await Gift.update({
        stock: gift.stock - qty,
      }, {
        where: {
          id: giftId,
        },
        transaction: t,
      });

      if (!updateStock) throw new Error('Failed to update stock');

      await t.commit();

      return redeemGift;

    } catch (error) {

      await t.rollback();

      throw error;

    }

  }
}

module.exports = RedeemService;

