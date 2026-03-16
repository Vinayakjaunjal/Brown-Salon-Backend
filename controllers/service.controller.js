const Service = require("../models/Service");
const cloudinary = require("../utils/cloudinary");

exports.getServices = async (req, res) => {
  const services = await Service.find();
  res.json(services);
};

const Service = require("../models/Service");
const cloudinary = require("../utils/cloudinary");

exports.addService = async (req, res) => {
  try {
    let imageUrl = "";

    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path);
      imageUrl = result.secure_url;
    }

    const service = await Service.create({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: imageUrl,
    });

    res.json(service);
  } catch (err) {
    console.error(err);
    res.status(500).json(err.message);
  }
};

exports.updateService = async (req, res) => {
  const updateData = {
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
  };

  if (req.file) {
    updateData.image = req.file.originalname;
  }

  await Service.findByIdAndUpdate(req.params.id, updateData);

  res.json({ success: true });
};

exports.deleteService = async (req, res) => {
  await Service.findByIdAndDelete(req.params.id);
  res.json({ success: true });
};
