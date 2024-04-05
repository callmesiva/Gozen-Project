const { checkSchema } = require("express-validator");

const userSchema = checkSchema({
  userName: {
    in: "body",
    notEmpty: true,
    errorMessage: "Username must not be empty",
  },
  email: {
    in: "body",
    isEmail: true,
    errorMessage: "Invalid email address",
  },
  phoneNumber: {
    in: "body",
    isMobilePhone: { options: "any" },
    errorMessage: "Invalid phone number",
  },
});

module.exports = userSchema;
