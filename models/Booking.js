const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema(
  {
    serviceId: String,
    serviceName: String,
    name: String,
    date: String,
    time: String,
    totalAmount: Number,
    email: String,
    paymentMethod: String,
    userId: String,

    status: {
      type: String,
      enum: ["confirmed", "completed", "cancelled", "no-show"],
      default: "confirmed",
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Booking", BookingSchema);
