const cron = require("node-cron");
const Appointment = require("../models/Appointment");
const sendEmail = require("./sendEmail");
const { reminderTemplate } = require("./emailTemplates");

cron.schedule("*/5 * * * *", async () => {
  const now = new Date();

  const next30Min = new Date(now.getTime() + 30 * 60000);

  const today = now.toISOString().split("T")[0];

  const appointments = await Appointment.find({
    date: today,
    status: "confirmed",
  });

  appointments.forEach(async (a) => {
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
    appointmentTime.setHours(appointmentTime.getHours() - 5);
    appointmentTime.setMinutes(appointmentTime.getMinutes() - 30);

    const diff = (appointmentTime - now) / 60000;

    if (diff > 29 && diff < 31 && !a.reminderSent) {
      await sendEmail({
        to: a.email,
        subject: "Appointment Reminder",
        html: reminderTemplate(a),
      });

      a.reminderSent = true;
      await a.save();
    }
  });
});
