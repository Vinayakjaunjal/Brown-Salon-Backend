const Pricing = require("../models/Pricing");

exports.getPricing = async (req, res) => {
  res.json(await Pricing.find());
};

exports.addPricing = async (req, res) => {
  await Pricing.create(req.body);
  res.json({ success: true });
};

exports.updatePricing = async (req, res) => {
  await Pricing.findByIdAndUpdate(req.params.id, req.body);
  res.json({ success: true });
};

exports.deletePricing = async (req, res) => {
  await Pricing.findByIdAndDelete(req.params.id);
  res.json({ success: true });
};
