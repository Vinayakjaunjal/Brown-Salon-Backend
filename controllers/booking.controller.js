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
