const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    'message': 'Hello World'
  });
});

router.use("/users", require("./UserRoutes"));
router.use("/auth", require("./AuthRoutes"));

// export router
module.exports = router;