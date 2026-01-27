const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();

const {
  getReviews,
  addReview,
  updateReview,
  deleteReview,
  toggleReview,
} = require("../controllers/review.controller");

// MULTER CONFIG
const storage = multer.diskStorage({
  destination: "uploads/reviews",
  filename: (req, file, cb) =>
    cb(null, Date.now() + path.extname(file.originalname)),
});

const upload = multer({ storage });

router.get("/", getReviews);
router.post("/", upload.single("image"), addReview);
router.put("/:id", upload.single("image"), updateReview);
router.put("/:id/toggle", toggleReview);
router.delete("/:id", deleteReview);

module.exports = router;
