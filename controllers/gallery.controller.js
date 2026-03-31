const Gallery = require("../models/Gallery");

exports.getGallery = async (req, res) => {
  res.json(await Gallery.find().sort({ order: 1 }));
};

exports.uploadImage = async (req, res) => {
  const count = await Gallery.countDocuments();

  await Gallery.create({
    image: `/uploads/gallery/${req.file.filename}`,
    order: count,
    category: req.body.category || "work", // 👈 add this
  });

  res.json({ success: true });
};

exports.updateCategory = async (req, res) => {
  const { category } = req.body;
  await Gallery.findByIdAndUpdate(req.params.id, { category });
  res.json({ success: true });
};

exports.deleteImage = async (req, res) => {
  await Gallery.findByIdAndDelete(req.params.id);
  res.json({ success: true });
};
