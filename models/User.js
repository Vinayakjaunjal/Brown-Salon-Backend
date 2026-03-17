const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: String,
    phone: String,
    password: String,
    role: {
      type: String,
      default: "user",
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("User", UserSchema);
