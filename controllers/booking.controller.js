const Booking = require("../models/Booking");
const sendEmail = require("../utils/sendEmail");
const { customerConfirmedTemplate } = require("../utils/emailTemplates");
const { statusUpdateTemplate } = require("../utils/emailTemplates");
const { adminNewAppointmentTemplate } = require("../utils/emailTemplates");

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

    try {
      await sendEmail({
        to: booking.email,
        subject: "Booking Confirmed",
        html: customerConfirmedTemplate({
          name: booking.name,
          category: booking.serviceName,
          date: booking.date,
          time: booking.time,
        }),
      });
    } catch (err) {
      console.log("EMAIL ERROR:", err.message);
    }

    try {
      await sendEmail({
        to: process.env.ADMIN_EMAIL,
        subject: "New Booking Received",
        html: adminNewAppointmentTemplate({
          name: booking.name,
          phone: booking.phone,
          email: booking.email,
          category: booking.serviceName,
          date: booking.date,
          time: booking.time,
        }),
      });
    } catch (err) {
      console.log("ADMIN EMAIL ERROR:", err.message);
    }

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

const Slot = require("../models/Slot");

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

    try {
      await sendEmail({
        to: booking.email,
        subject: "Booking Status Update",
        html: statusUpdateTemplate(
          {
            name: booking.name,
            category: booking.serviceName,
            date: booking.date,
            time: booking.time,
          },
          status,
        ),
      });
    } catch (err) {
      console.log("EMAIL ERROR:", err.message);
    }

    console.log("STATUS UPDATED:", status);

    if (status === "cancelled" || status === "no-show") {
      try {
        await Slot.findOneAndUpdate(
          {
            date: booking.date,
            time: booking.time,
          },
          {
            status: "available",
          },
        );

        console.log("SLOT FREED:", booking.date, booking.time);
      } catch (err) {
        console.log("SLOT UPDATE ERROR:", err);
      }
    }

    res.json({
      success: true,
      data: booking,
    });
  } catch (err) {
    console.log("UPDATE ERROR:", err);
    res.status(500).json({ message: err.message });
  }
};
