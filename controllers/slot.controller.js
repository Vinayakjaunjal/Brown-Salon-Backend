const Slot = require("../models/Slot");
const Booking = require("../models/Booking");

exports.getSlots = async (req, res) => {
  try {
    const { date, artist } = req.query;

    const slots = await Slot.find({ date, artist });
    const bookings = await Booking.find({
      date,
      artist,
      status: "confirmed",
    });

    const merged = [...slots];

    bookings.forEach((b) => {
      merged.push({
        date: b.date,
        time: b.time,
        status: "booked",
        artist: b.artist,
      });
    });

    res.json(merged);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.saveSlots = async (req, res) => {
  const { date, artist, slots } = req.body;

  await Slot.deleteMany({ date, artist });

  const formatted = slots.map((s) => ({
    date,
    time: s.time,
    status: s.status,
    artist,
  }));

  await Slot.insertMany(formatted);

  const room = `${date}_${artist}`;
  global.io.to(room).emit("slotUpdated", { date, artist });

  res.json({ success: true });
};

exports.getAvailableSlots = async (req, res) => {
  const { date, artist } = req.query;
  const mongoose = require("mongoose");

  if (!artist || !mongoose.Types.ObjectId.isValid(artist)) {
    return res.json([]);
  }

  const defaultSlots = [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
    "8:30 PM",
    "9:00 PM",
    "9:30 PM",
    "10:00 PM",
  ];

  const bookings = await Booking.find({
    date,
    artist,
    status: "confirmed",
  });

  const blocked = await Slot.find({
    date,
    artist,
    status: { $in: ["blocked"] },
  });

  const slotData = await Slot.find({ date, artist });

  const result = defaultSlots.map((time) => {
    const booking = bookings.find((b) => b.time === time);
    const slot = slotData.find((s) => s.time === time);

    if (booking) return { time, status: "booked" };
    if (slot) return { time, status: slot.status };

    return { time, status: "available" };
  });

  res.json(result);
};

exports.blockSlot = async (req, res) => {
  const { date, time, artist } = req.body;

  await Slot.create({
    date,
    time,
    artist,
    status: "blocked",
  });

  const room = `${date}_${artist}`;
  global.io.to(room).emit("slotUpdated", { date, artist });

  res.json({ success: true });
};

exports.unblockSlot = async (req, res) => {
  const { date, time, artist } = req.body;

  await Slot.deleteOne({ date, time, artist });

  const room = `${date}_${artist}`;
  global.io.to(room).emit("slotUpdated", { date, artist });

  res.json({ success: true });
};
