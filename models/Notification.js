const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema(
  {
    title: String,
    message: String,
    type: String, // appointment | birthday
    link: String,
    isRead: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Notification", notificationSchema);
