const User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const { name, phone, password } = req.body;

    // check existing
    const existing = await User.findOne({ phone });
    if (existing) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({
      name,
      phone,
      password,
      role: "user",
    });

    const token = jwt.sign({ id: user._id }, "secret", {
      expiresIn: "7d",
    });

    res.json({
      success: true,
      data: { user, token },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { phone, password } = req.body;

    const user = await User.findOne({ phone });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    if (user.password !== password) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = jwt.sign({ id: user._id }, "secret", {
      expiresIn: "7d",
    });

    res.json({
      success: true,
      data: { user, token },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
