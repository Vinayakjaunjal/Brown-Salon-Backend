const mongoose = require("mongoose");

const FestivalSchema = new mongoose.Schema(
  {
    name: String,
    date: String,
    subject: String,
    message: String,
  },
  { timestamps: true },
);

module.exports = mongoose.model("Festival", FestivalSchema);
