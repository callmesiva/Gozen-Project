const jwt = require("jsonwebtoken");

exports.createToken = (req, res) => {
  try {
    const token = jwt.sign({ userId: "5656" }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });
    res.status(200).json({ status: "Success", msg: token });
  } catch (error) {
    res.status(500).json({ status: "Failed", msg: err.message });
  }
};
