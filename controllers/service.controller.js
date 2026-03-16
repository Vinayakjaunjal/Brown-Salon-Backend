const Service = require("../models/Service");

exports.getServices = async (req, res) => {
  const services = await Service.find();
  res.json(services);
};

exports.addService = async (req, res) => {
  try {
    let imageUrl = "";

    if (req.file) {
      imageUrl = req.file.path; // Cloudinary URL automatically
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
  try {
    const updateData = {
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
    };

    if (req.file) {
      updateData.image = req.file.path;
    }

    await Service.findByIdAndUpdate(req.params.id, updateData);

    res.json({ success: true });
  } catch (err) {
    res.status(500).json(err.message);
  }
};

exports.deleteService = async (req, res) => {
  await Service.findByIdAndDelete(req.params.id);
  res.json({ success: true });
};
