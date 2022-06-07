const GiftRedeemService = require('@services/gift/RedeemService');
const redeemService = new GiftRedeemService();
const { successRes, errorRes } = require('@common/response');

class GiftRedeemController {
  async redeemGift(req, res) {
    try {
      const user_id = req.user.id;
      const { id } = req.params;
      const { qty } = req.body;
      const gift = await redeemService.createRedeem(id, qty, user_id);
      return successRes(res, gift);
    } catch (error) {
      return errorRes(res, error, error.message);
    }
  }
}

module.exports = GiftRedeemController;