const express = require("express");
const upload = require("../middleware/upload");
const router = express.Router();

const {
  getGallery,
  uploadImage,
  deleteImage,
  reorderGallery,
  updateCategory,
} = require("../controllers/gallery.controller");

router.get("/", getGallery);
router.post("/", upload.single("image"), uploadImage);
router.delete("/:id", deleteImage);
router.put("/reorder", reorderGallery);
router.put("/:id/category", updateCategory);

module.exports = router;
