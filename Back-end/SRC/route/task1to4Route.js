const express = require("express");
const router = express.Router();
const task = require("../controller/task1to4Control");
const middleware = require("../../middleware/logDetails");

router.post("/writeFile", middleware.logDetails, task.writeFile);
router.get("/readfile", middleware.logDetails, task.checkName);

module.exports = router;
