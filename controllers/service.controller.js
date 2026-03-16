const Service = require("../models/Service");

exports.getServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.addService = async (req, res) => {
  try {
    const service = new Service({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: req.file ? req.file.path : "",
    });

    await service.save();

    res.json({
      success: true,
      data: service,
    });
  } catch (err) {
    console.error("ADD SERVICE ERROR:", err);
    res.status(500).json({
      success: false,
      message: err.message,
    });
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
    console.error(err);
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.deleteService = async (req, res) => {
  try {
    await Service.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false });
  }
};
