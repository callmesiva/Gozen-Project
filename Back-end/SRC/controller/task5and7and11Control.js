const User = require("../../models/userDataSchema");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ status: "Success", msg: users });
  } catch (err) {
    res.status(500).json({ status: "Failed", msg: err.message });
  }
};

exports.createUser = async (req, res) => {
  try {
    const user = new User({
      userName: req.body.userName,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
    });
    const newUser = await user.save();
    res.status(200).json({ status: "Success", msg: newUser });
  } catch (err) {
    res.status(500).json({ status: "Failed", msg: err.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ status: "Failed", msg: "User not found" });
    }

    if (
      req.body.userName != null &&
      req.body.email != null &&
      req.body.phoneNumber != null
    ) {
      user.userName = req.body.userName;
      user.email = req.body.email;
      user.phoneNumber = req.body.phoneNumber;
    }

    const updatedUser = await user.save();
    res.status(200).json({ status: "Success", msg: updatedUser });
  } catch (err) {
    res.status(500).json({ status: "Failed", msg: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    console.log(req.params.id);
    console.log(user);
    if (!user) {
      return res.status(404).json({ status: "Failed", msg: "User not found" });
    }
    await user.deleteOne({ _id: req.params.id });
    res.status(200).json({ status: "Success", msg: "User deleted" });
  } catch (err) {
    res.status(500).json({ status: "Failed", msg: err.message });
  }
};
