const Slot = require("../models/Slot");

exports.getSlots = async (req, res) => {
  const { date } = req.query;
  if (!date) return res.json([]);
  const slots = await Slot.find({ date });
  res.json(slots);
};

exports.saveSlots = async (req, res) => {
  const { date, slots } = req.body;

  await Slot.deleteMany({ date });

  const formatted = slots.map((s) => ({
    date,
    time: s.time,
    status: s.status,
  }));

  await Slot.insertMany(formatted);
  res.json({ success: true });
};
