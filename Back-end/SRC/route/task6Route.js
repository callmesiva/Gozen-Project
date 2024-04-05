const express = require("express");
const router = express.Router();
const token = require("../controller/task6Control");
const middleware = require("../../middleware/verifyToken");

router.get("/gettoken", token.createToken);
router.get("/protectedroute", middleware.verifyToken, (req, res) => {
  res.status(200).json({ status: "Success", msg: "Token verified" });
});

module.exports = router;
