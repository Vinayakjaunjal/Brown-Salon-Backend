const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  category: String,
  date: String,
  time: String,
  message: String,
  status: {
    type: String,
    default: "pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Appointment", AppointmentSchema);
