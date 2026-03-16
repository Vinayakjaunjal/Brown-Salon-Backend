const Service = require("../models/Service");

exports.getServices = async (req, res) => {
  const services = await Service.find();
  res.json(services);
};

exports.addService = async (req, res) => {
  const image = req.file ? req.file.path : "";

  const service = await Service.create({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image,
  });

  res.json(service);
};

exports.updateService = async (req, res) => {
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
};

exports.deleteService = async (req, res) => {
  await Service.findByIdAndDelete(req.params.id);
  res.json({ success: true });
};
