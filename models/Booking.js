const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  serviceId: String,
  serviceName: String,
  date: String,
  time: String,
  totalAmount: Number,
  email: String,
  paymentMethod: String,
  status: { type: String, default: "pending" },
  userId: String,
});

module.exports = mongoose.model("Booking", BookingSchema);
