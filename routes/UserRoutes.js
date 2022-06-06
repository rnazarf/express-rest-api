const express = require("express");
const app = express();
const UserController = require("../controllers/UserController");
const userController = new UserController();
const auth = require("../middleware/authorization");

const router = express.Router();

router.get("/", auth, userController.getAllUser);
router.get("/:id", auth, userController.getUserById);
router.post("/", auth, userController.addUser);
router.put("/:id", auth, userController.updateUser);
router.delete("/:id", auth, userController.deleteUser);
router.patch("/:id", auth, userController.updatePassword);

module.exports = router;