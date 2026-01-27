const mongoose = require("mongoose");

const PricingSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  category: String,
  order: Number,
});

module.exports = mongoose.model("Pricing", PricingSchema);
