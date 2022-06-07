const express = require("express");
const GiftController = require("../controllers/GiftController");
const giftController = new GiftController();

const GiftRatingController = require("../controllers/GiftRatingController");
const giftRatingController = new GiftRatingController();

const GiftRedeemController = require("../controllers/GiftRedeemController");
const giftRedeemController = new GiftRedeemController();

const auth = require("../middleware/authorization");
const multer = require('multer');
const os = require('os');

const router = express.Router();

router.get("/", auth, giftController.getAllGift);
router.get("/:id", auth, giftController.getGiftById);
router.post("/", auth, multer({ dest: os.tmpdir() }).single('image'), giftController.addGift);
router.put("/:id", auth, multer({ dest: os.tmpdir() }).single('image'), giftController.updateGift);
router.patch("/:id", auth, giftController.updateStockGift);

router.post('/:id/rating', auth, giftRatingController.addRating);
router.post('/:id/redeem', auth, giftRedeemController.redeemGift);

module.exports = router;