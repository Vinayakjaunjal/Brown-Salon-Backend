const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema(
  {
    name: String,
    email: { type: String, unique: true },
    password: String,
    username: String,
    photo: String,
    resetToken: String,
    resetTokenExpiry: Date,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Admin", AdminSchema);
