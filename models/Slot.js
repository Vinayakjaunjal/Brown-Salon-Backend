const mongoose = require("mongoose");

const SlotSchema = new mongoose.Schema({
  date: String,
  time: String,
  status: {
    type: String,
    enum: ["available", "booked", "blocked"],
    default: "available",
  },
});

SlotSchema.index({ date: 1, time: 1 }, { unique: true });

module.exports = mongoose.model("Slot", SlotSchema);
