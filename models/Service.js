const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },

    price: {
      type: Number,
    },

    category: {
      type: String,
    },

    image: {
      type: String,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Service", serviceSchema);
