const mongoose = require("mongoose");

const SlotSchema = new mongoose.Schema({
  artist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Artist",
  },
  date: String,
  time: String,

  status: {
    type: String,
    enum: ["available", "blocked"],
    default: "available",
  },
});

SlotSchema.index({ date: 1, time: 1, artist: 1 }, { unique: true });

module.exports = mongoose.model("Slot", SlotSchema);
