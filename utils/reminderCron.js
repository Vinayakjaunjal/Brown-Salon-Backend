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
    const appointmentTime = new Date(`${a.date}T${a.time}`);

    const diff = (appointmentTime - now) / 60000;

    if (diff > 25 && diff < 35 && !a.reminderSent) {
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
