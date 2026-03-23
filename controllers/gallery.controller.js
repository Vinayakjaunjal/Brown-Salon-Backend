const Gallery = require("../models/Gallery");
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

exports.getGallery = async (req, res) => {
  res.json(await Gallery.find().sort({ order: 1 }));
};

exports.uploadImage = async (req, res) => {
  try {
    const count = await Gallery.countDocuments();
    const filePath = path.join("uploads/gallery", req.file.filename);
    const outputPath = path.join(
      "uploads/gallery",
      "optimized-" + req.file.filename,
    );

    await sharp(filePath)
      .resize(800, 600)
      .jpeg({ quality: 70 })
      .toFile(outputPath);

    fs.unlinkSync(filePath);
    await Gallery.create({
      image: `/uploads/gallery/optimized-${req.file.filename}`,
      order: count,
    });

    res.json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

exports.deleteImage = async (req, res) => {
  await Gallery.findByIdAndDelete(req.params.id);
  res.json({ success: true });
};

exports.reorderGallery = async (req, res) => {
  const { items } = req.body;

  for (let i = 0; i < items.length; i++) {
    await Gallery.findByIdAndUpdate(items[i]._id, { order: i });
  }

  res.json({ success: true });
};
