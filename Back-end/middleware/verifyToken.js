const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
  try {
    const token = req.headers["token"];

    if (!token) {
      return res.status(404).json({ status: "Failed", msg: "Token not found" });
    }

    jwt.verify(token, process.env.SECRET_KEY, (err) => {
      if (err) {
        return res.status(400).json({ status: "Failed", msg: "Invalid token" });
      }
      next();
    });
  } catch (error) {
    res.status(500).json({ status: "Failed", msg: error });
  }
};
