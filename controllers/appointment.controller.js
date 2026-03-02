const Appointment = require("../models/Appointment");
const Notification = require("../models/Notification");
const sendEmail = require("../utils/sendEmail");
const Customer = require("../models/Customer");

const {
  customerConfirmedTemplate,
  adminNewAppointmentTemplate,
  statusUpdateTemplate,
} = require("../utils/emailTemplates");

const Slot = require("../models/Slot");

// ================= CREATE =================

exports.createAppointment = async (req, res) => {
  try {
    const { date, time } = req.body;

    // SLOT CHECK
    const exists = await Slot.findOne({ date, time });

    if (exists) {
      return res.status(400).json({
        message: "Slot not available",
      });
    }

    // SLOT LOCK
    await Slot.create({
      date,
      time,
      status: "booked",
    });

    // APPOINTMENT SAVE
    const appointment = new Appointment({
      ...req.body,
      status: "confirmed",
    });

    await appointment.save();

    // ================= CUSTOMER AUTO SAVE =================

    const existingCustomer = await Customer.findOne({
      email: appointment.email,
    });

    if (existingCustomer) {
      existingCustomer.visits += 1;
      existingCustomer.lastVisit = appointment.date;
      await existingCustomer.save();
    } else {
      await Customer.create({
        name: appointment.name,
        email: appointment.email,
        phone: appointment.phone,
        visits: 1,
        lastVisit: appointment.date,
      });
    }

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

    if (status === "cancelled") {
      await Slot.deleteOne({
        date: appointment.date,
        time: appointment.time,
      });
    }

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
