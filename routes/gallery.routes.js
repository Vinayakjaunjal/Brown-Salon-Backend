const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();

const {
  getGallery,
  uploadImage,
  deleteImage,
  reorderGallery,
} = require("../controllers/gallery.controller");

// MULTER CONFIG (same as before)
const storage = multer.diskStorage({
  destination: "uploads/gallery",
  filename: (req, file, cb) =>
    cb(null, Date.now() + path.extname(file.originalname)),
});

const upload = multer({ storage });

router.get("/", getGallery);
router.post("/", upload.single("image"), uploadImage);
router.delete("/:id", deleteImage);
router.put("/reorder", reorderGallery);

module.exports = router;
