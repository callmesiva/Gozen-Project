const express = require("express");
const router = express.Router();
const crud = require("../controller/task5and7and11Control");
const mainValidator = require("../../middleware/validator/mainValidator");
const userValidator = require("../../middleware/validator/userValidator");

router.get("/getdata", crud.getAllUsers);
router.post("/postdata", mainValidator(userValidator), crud.createUser);
router.put("/update/:id", crud.updateUser);
router.delete("/delete/:id", crud.deleteUser);

module.exports = router;
