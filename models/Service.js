const mongoose = require("mongoose");

const ServiceSchema = new mongoose.Schema({
  icon: String, // bi bi-scissors
  title: String,
  desc: String,
});

module.exports = mongoose.model("Service", ServiceSchema);
