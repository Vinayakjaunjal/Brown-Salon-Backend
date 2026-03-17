const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  serviceId: String,
  date: String,
  time: String,
  totalAmount: Number,
  email: String,
  paymentMethod: String,
});

module.exports = mongoose.model("Booking", BookingSchema);
