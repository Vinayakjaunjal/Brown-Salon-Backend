const cron = require("node-cron");
const Booking = require("../models/Booking");
const sendEmail = require("./sendEmail");
const { reminderTemplate } = require("./emailTemplates");

cron.schedule("*/5 * * * *", async () => {
  const now = new Date();

  const next30Min = new Date(now.getTime() + 30 * 60000);

  const today = now.toISOString().split("T")[0];

  const bookings = await Booking.find({
    date: today,
    status: "confirmed",
  });

  bookings.forEach(async (a) => {
    const [time, modifier] = a.time.split(" ");

    let [hours, minutes] = time.split(":");

    if (modifier === "PM" && hours !== "12") {
      hours = parseInt(hours, 10) + 12;
    }
    if (modifier === "AM" && hours === "12") {
      hours = "00";
    }

    const appointmentTime = new Date(a.date);
    appointmentTime.setHours(hours);
    appointmentTime.setMinutes(minutes);
    appointmentTime.setSeconds(0);

    const diff = (appointmentTime - now) / 60000;

    if (diff > 20 && diff < 30 && !a.reminderSent) {
      await sendEmail({
        to: a.email,
        subject: `Appointment Reminder: ${data.serviceName} at ${data.time}`,
        html: reminderTemplate(a),
      });

      a.reminderSent = true;
      await a.save();
    }
  });
});
