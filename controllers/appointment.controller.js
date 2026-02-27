const Appointment = require("../models/Appointment");
const Notification = require("../models/Notification");
const sendEmail = require("../utils/sendEmail");

const {
  customerPendingTemplate,
  adminNewAppointmentTemplate,
  statusUpdateTemplate,
} = require("../utils/emailTemplates");

const Slot = require("../models/Slot");

// ================= CREATE =================

exports.createAppointment = async (req, res) => {
  try {
    const { date, time } = req.body;

    // CHECK IF SLOT BLOCKED OR BOOKED
    const exists = await Slot.findOne({ date, time });

    if (exists) {
      return res.status(400).json({
        message: "Slot not available",
      });
    }

    // LOCK SLOT
    await Slot.create({
      date,
      time,
      status: "booked",
    });

    // CREATE APPOINTMENT
    const appointment = new Appointment({
      ...req.body,
      status: "confirmed",
    });

    await appointment.save();

    // CUSTOMER EMAIL
    await sendEmail({
      to: appointment.email,
      subject: "Appointment Confirmed",
      html: customerConfirmedTemplate(appointment),
    });

    // ADMIN EMAIL
    await sendEmail({
      to: process.env.ADMIN_EMAIL,
      subject: "New Appointment Booked",
      html: adminNewAppointmentTemplate(appointment),
    });

    await Notification.create({
      title: "New Booking",
      message: `${appointment.name} booked ${appointment.time} on ${appointment.date}`,
      type: "appointment",
      link: "/admin/appointments",
    });

    res.json({
      success: true,
      message: "Appointment Confirmed",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Booking failed",
    });
  }
};

// ================= GET =================

exports.getAppointments = async (req, res) => {
  const { date } = req.query;
  const query = date ? { date } : {};
  const data = await Appointment.find(query);
  res.json(data);
};

// ================= UPDATE STATUS =================

exports.updateAppointmentStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const appointment = await Appointment.findById(req.params.id);

    if (!appointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }

    appointment.status = status;
    await appointment.save();

    await sendEmail({
      to: appointment.email,
      subject: "Appointment Status Update | Brown Hair Salon",
      html: statusUpdateTemplate(appointment, status),
    });

    res.json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Status update failed" });
  }
};
