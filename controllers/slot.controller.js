const Slot = require("../models/Slot");
const Booking = require("../models/Booking");

exports.getSlots = async (req, res) => {
  try {
    const { date, artistId } = req.query;

    const slots = await Slot.find({
      date,
      ...(artistId && { artist: artistId }),
    });

    const bookings = await Booking.find({
      date,
      ...(artistId && { artist: artistId }),
    });

    const merged = [...slots];

    bookings.forEach((b) => {
      merged.push({
        date: b.date,
        time: b.time,
        status: b.status === "confirmed" ? "booked" : "available",
        artist: b.artist,
      });
    });

    res.json(merged);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

exports.saveSlots = async (req, res) => {
  const { date, artistId, slots } = req.body;

  await Slot.deleteMany({ date, artist: artistId });

  const formatted = slots.map((s) => ({
    date,
    time: s.time,
    status: s.status,
    artist: artistId,
  }));

  await Slot.insertMany(formatted);

  res.json({ success: true });
};

exports.getAvailableSlots = async (req, res) => {
  try {
    const { date, artistId } = req.query;

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

    const blockedSlots = await Slot.find({
      date,
      artist: artistId,
    });

    const bookings = await Booking.find({
      date,
      artist: artistId,
      status: "confirmed",
    });

    const blockedTimes = blockedSlots.map((s) => s.time);
    const bookedTimes = bookings.map((b) => b.time);

    const unavailable = [...blockedTimes, ...bookedTimes];

    const availableSlots = defaultSlots.filter(
      (slot) => !unavailable.includes(slot),
    );

    res.json(availableSlots);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.blockSlot = async (req, res) => {
  const { date, time, artistId } = req.body;

  await Slot.create({
    date,
    time,
    artist: artistId,
    status: "blocked",
  });

  res.json({ success: true });
};

exports.unblockSlot = async (req, res) => {
  const { date, time, artistId } = req.body;

  await Slot.deleteOne({
    date,
    time,
    artist: artistId,
  });

  res.json({ success: true });
};
