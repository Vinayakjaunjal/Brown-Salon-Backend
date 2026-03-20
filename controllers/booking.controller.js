const Booking = require("../models/Booking");
const Slot = require("../models/Slot");

exports.createBooking = async (req, res) => {
  console.log("CREATING BOOKING:", req.body);
  try {
    const booking = await Booking.create({
      serviceId: req.body.serviceId,
      name: req.body.name,
      phone: req.body.phone,
      serviceName: req.body.serviceName,
      date: req.body.date,
      time: req.body.time,
      totalAmount: Number(req.body.totalAmount) || 0,
      email: req.body.email,
      paymentMethod: req.body.paymentMethod,
      userId: req.body.userId,
    });

    res.json({
      success: true,
      data: booking,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.getBookings = async (req, res) => {
  try {
    const { userId } = req.query;

    if (!userId) {
      return res.status(400).json({ message: "userId required" });
    }

    const bookings = await Booking.find({ userId })
      .populate("serviceId")
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      data: bookings || [],
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      data: bookings,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateBookingStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const booking = await Booking.findById(id);

    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    booking.status = status;
    await booking.save();

    // ✅ SLOT UNBLOCK LOGIC
    if (status === "cancelled" || status === "no-show") {
      await Slot.deleteOne({
        date: booking.date,
        time: booking.time,
      });

      console.log("SLOT FREED:", booking.date, booking.time);
    }

    res.json({
      success: true,
      data: booking,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};
