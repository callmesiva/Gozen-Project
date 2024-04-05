const mongoose = require("mongoose");
const { Schema } = mongoose;

const userDataSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("userData", userDataSchema);
