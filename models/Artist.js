const mongoose = require("mongoose");

const ArtistSchema = new mongoose.Schema(
  {
    name: String,
    type: String,
    image: String,
    active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Artist", ArtistSchema);
