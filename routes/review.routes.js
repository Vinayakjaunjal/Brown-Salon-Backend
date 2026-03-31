const express = require("express");
const upload = require("../middleware/upload");
const router = express.Router();

const {
  getReviews,
  addReview,
  updateReview,
  deleteReview,
  toggleReview,
} = require("../controllers/review.controller");

router.get("/", getReviews);
router.post("/", upload.single("image"), addReview);
router.put("/:id", upload.single("image"), updateReview);
router.put("/:id/toggle", toggleReview);
router.delete("/:id", deleteReview);

module.exports = router;
