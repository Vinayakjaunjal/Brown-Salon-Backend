const Service = require("../models/Service");

exports.getServices = async (req, res) => {
  const services = await Service.find();
  res.json(services);
};

exports.addService = async (req, res) => {
  try {
    const service = new Service({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: req.file ? req.file.originalname : "",
    });

    await service.save();

    res.json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
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
