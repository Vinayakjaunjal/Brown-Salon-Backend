const Slot = require("../models/Slot");
const Booking = require("../models/Booking");

exports.getSlots = async (req, res) => {
  try {
    const { date } = req.query;

    const bookings = await Booking.find({
      date,
      status: "confirmed",
    });

    const bookingSlots = bookings.map((b) => ({
      time: b.time,
      status: "booked",
    }));

    const manualSlots = await Slot.find({ date });

    const merged = [...manualSlots];

    bookingSlots.forEach((b) => {
      const exists = merged.find((s) => s.time === b.time);

      if (!exists) {
        merged.push(b);
      }
    });

    res.json(merged);
  } catch (err) {
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
  io.emit("booking_status_updated", {
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
