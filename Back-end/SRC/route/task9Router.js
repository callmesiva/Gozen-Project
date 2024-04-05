const express = require("express");
const router = express.Router();
const task = require("../controller/task9Control");

router.get("/asyncfetch", task.asyncFetch);
module.exports = router;
