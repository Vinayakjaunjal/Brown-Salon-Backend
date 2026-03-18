const Booking = require("../models/Booking");

exports.createBooking = async (req, res) => {
  try {
    const booking = await Booking.create({
      serviceId: req.body.serviceId,
      date: req.body.date,
      time: req.body.time,
      totalAmount: req.body.totalAmount,
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

    const bookings = await Booking.find({ userId }).sort({ createdAt: -1 });

    res.json({
      success: true,
      data: bookings || [],
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};
