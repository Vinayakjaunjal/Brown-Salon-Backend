const Customer = require("../models/Customer");

exports.getCustomers = async (req, res) => {
  const customers = await Customer.find().sort({ visits: -1 });
  res.json(customers);
};
