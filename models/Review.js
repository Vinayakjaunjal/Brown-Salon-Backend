const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    name: String,
    review: String,
    rating: Number,
    image: String, // image URL or uploaded image pathn,

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", reviewSchema);
