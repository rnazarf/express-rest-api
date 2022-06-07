const GiftService = require('@services/gift/GiftService');
const giftService = new GiftService();
const { storeFile, destroyFile } = require('@services/FileService');
const { errorRes, successRes } = require("@common/response");
const { GiftCreatePayloadSchema, GiftUpdatePayloadSchema } = require('../validator/GiftRequestValidator');

class GiftController {
  async getAllGift(req, res) {
    try {
      const { limit, offset } = req.query;
      const gifts = await giftService.getAllGift(limit, offset);
      return successRes(res, gifts);
    } catch (error) {
      return errorRes(res, error, error.message);
    }
  }

  async getGiftById(req, res) {
    try {
      const { id } = req.params;
      const gift = await giftService.getGiftById(id);
      return successRes(res, gift);
    } catch (error) {
      return errorRes(res, error, error.message);
    }
  }

  async addGift(req, res) {
    try {

      const validate = GiftCreatePayloadSchema.validate(req.body);

      if (validate.error) return errorRes(res, validate.error.message, "Invalid payload", 400);

      if (!req.file) return errorRes(res, 'No image found', 'No image found', 400);

      const filename = storeFile(req.file, 'images/gift');

      const giftValue = {
        ...validate.value,
        image: filename
      }

      const gift = await giftService.createGift(giftValue);
      return successRes(res, gift);

    } catch (error) {
      return errorRes(res, error, error.message);
    }
  }

  async updateGift(req, res) {
    try {
      const validate = GiftUpdatePayloadSchema.validate(req.body);

      if (validate.error) return errorRes(res, validate.error.message, 'Invalid payload', 400);

      const giftValue = {
        ...validate.value,
      }

      if (req.file) {
        const image = storeFile(req.file, 'images/gift')
        giftValue.image = image
      };

      const gift = await giftService.updateGift(req.params.id, giftValue);

      if (!gift) {
        throw new Error("Failed to update gift");
      }

      await destroyFile(gift.oldImage, 'images/gift');

      return successRes(res, gift);
    } catch (error) {
      return errorRes(res, error, error.message);
    }
  }

  async updateStockGift(req, res) {
    try {
      const { id } = req.params;
      const { stock } = req.body;
      const gift = await giftService.updateStockGift(id, stock);
      return successRes(res, gift);
    } catch (error) {
      return errorRes(res, error, error.message);
    }
  }

  async deleteGift(req, res) {
    try {
      const gift = await giftService.deleteGift(req.params.id);
      return successRes(res, gift);
    } catch (error) {
      return errorRes(res, error, error.message);
    }
  }
}

module.exports = GiftController;