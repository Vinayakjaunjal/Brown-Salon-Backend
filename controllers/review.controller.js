const Review = require("../models/Review");

exports.getReviews = async (req, res) => {
  res.json(await Review.find().sort({ createdAt: -1 }));
};

exports.addReview = async (req, res) => {
  await Review.create({
    name: req.body.name,
    review: req.body.review,
    rating: req.body.rating,
    image: req.file ? `/uploads/reviews/${req.file.filename}` : "",
  });

  res.json({ success: true });
};

exports.updateReview = async (req, res) => {
  const updateData = {
    name: req.body.name,
    review: req.body.review,
    rating: req.body.rating,
  };

  if (req.file) {
    updateData.image = `/uploads/reviews/${req.file.filename}`;
  }

  await Review.findByIdAndUpdate(req.params.id, updateData);
  res.json({ success: true });
};

exports.deleteReview = async (req, res) => {
  await Review.findByIdAndDelete(req.params.id);
  res.json({ success: true });
};

exports.toggleReview = async (req, res) => {
  const review = await Review.findById(req.params.id);
  review.isActive = !review.isActive;
  await review.save();
  res.json({ success: true });
};
