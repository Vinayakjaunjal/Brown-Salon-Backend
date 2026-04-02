const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const sendEmail = require("../utils/sendEmail");

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

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
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

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
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

exports.sendOtp = async (req, res) => {
  try {
    const { phone } = req.body; // 👉 this is email now

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    let user = await User.findOne({ phone });

    if (!user) {
      user = new User({ phone });
    }

    user.otp = otp;
    user.otpExpiry = Date.now() + 5 * 60 * 1000;

    await user.save();

    await sendEmail({
      to: phone,
      subject: "Your OTP Code",
      html: `<h2>Your OTP is ${otp}</h2>`,
    });

    res.json({ success: true, message: "OTP sent to email" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

exports.verifyOtp = async (req, res) => {
  try {
    const { phone, otp, name, password } = req.body;

    const user = await User.findOne({ phone });

    if (!user) return res.status(400).json({ message: "User not found" });

    if (user.otp !== otp) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    if (user.otpExpiry < Date.now()) {
      return res.status(400).json({ message: "OTP expired" });
    }

    user.name = name;
    user.password = await bcrypt.hash(password, 10);
    user.isVerified = true;
    user.otp = null;

    await user.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
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
