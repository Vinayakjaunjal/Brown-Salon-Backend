const Slot = require("../models/Slot");
const Booking = require("../models/Booking");

exports.getSlots = async (req, res) => {
  try {
    const { date } = req.query;
    const slots = await Slot.find({ date });
    const bookings = await Booking.find({ date });
    const merged = [...slots];

    bookings.forEach((b) => {
      merged.push({
        date: b.date,
        time: b.time,
        status: b.status === "confirmed" ? "booked" : "available",
      });
    });

    res.json(merged);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
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

  const io = req.app.get("io");
  io.emit("booking_status-updated", {
    booking: {
      date,
    },
  });
  res.json({ success: true });
};

exports.getAvailableSlots = async (req, res) => {
  const { date } = req.query;

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

  const blockedOrBooked = await Slot.find({ date });

  const blockedTimes = blockedOrBooked.map((s) => s.time);

  const availableSlots = defaultSlots.filter(
    (slot) => !blockedTimes.includes(slot),
  );

  res.json(availableSlots);
};

exports.blockSlot = async (req, res) => {
  const { date, time } = req.body;

  await Slot.create({
    date,
    time,
    status: "blocked",
  });

  res.json({ success: true });
};

exports.unblockSlot = async (req, res) => {
  const { date, time } = req.body;

  await Slot.deleteOne({ date, time });

  res.json({ success: true });
};
