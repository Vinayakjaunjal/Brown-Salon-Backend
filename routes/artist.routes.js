const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");

const {
  getArtists,
  createArtist,
  deleteArtist,
  updateArtist,
} = require("../controllers/artist.controller");

router.get("/", getArtists);
router.post("/", upload.single("image"), createArtist);
router.delete("/:id", deleteArtist);
router.put("/:id", upload.single("image"), updateArtist);

module.exports = router;
