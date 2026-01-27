const mongoose = require("mongoose");

const BirthdayCustomerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: String,
    phone: String,
    dob: {
      type: String, // YYYY-MM-DD
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("BirthdayCustomer", BirthdayCustomerSchema);
