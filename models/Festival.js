const mongoose = require("mongoose");
const FestivalSchema = new mongoose.Schema({
  name: String,
  date: String,
  subject: String,
  message: String,

  sent: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Festival", FestivalSchema);
