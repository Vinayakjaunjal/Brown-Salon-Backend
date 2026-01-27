const mongoose = require("mongoose");

const SlotSchema = new mongoose.Schema({
  date: String,
  time: String,
  status: {
    type: String,
    enum: ["available", "booked"],
    default: "available",
  },
});

module.exports = mongoose.model("Slot", SlotSchema);
