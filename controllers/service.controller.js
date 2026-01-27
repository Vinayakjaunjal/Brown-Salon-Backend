const Service = require("../models/Service");

exports.getServices = async (req, res) => {
  res.json(await Service.find());
};

exports.addService = async (req, res) => {
  await Service.create(req.body);
  res.json({ success: true });
};

exports.updateService = async (req, res) => {
  await Service.findByIdAndUpdate(req.params.id, req.body);
  res.json({ success: true });
};

exports.deleteService = async (req, res) => {
  await Service.findByIdAndDelete(req.params.id);
  res.json({ success: true });
};
