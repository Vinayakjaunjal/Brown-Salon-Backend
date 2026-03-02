const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema(
  {
    name: String,
    email: String,

    visits: {
      type: Number,
      default: 1,
    },

    lastVisit: String,
  },
  { timestamps: true },
);

module.exports = mongoose.model("Customer", CustomerSchema);
