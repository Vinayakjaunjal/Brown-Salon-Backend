const mongoose = require("mongoose");

const SlotSchema = new mongoose.Schema({
  date: String,
  time: String,
  artist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Artist",
  },
  status: {
    type: String,
    enum: ["available", "blocked", "booked"],
    default: "available",
  },
});

SlotSchema.index({ date: 1, time: 1, artist: 1 }, { unique: true });

module.exports = mongoose.model("Slot", SlotSchema);
