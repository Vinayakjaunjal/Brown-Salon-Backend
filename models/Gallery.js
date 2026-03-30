const mongoose = require("mongoose");

const GallerySchema = new mongoose.Schema(
  {
    image: String,
    order: Number,
    category: {
      type: String,
      default: "work", // default category
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Gallery", GallerySchema);
