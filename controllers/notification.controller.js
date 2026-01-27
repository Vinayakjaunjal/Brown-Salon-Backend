const Notification = require("../models/Notification");
const BirthdayCustomer = require("../models/BirthdayCustomer");

exports.getNotifications = async (req, res) => {
  res.json(await Notification.find().sort({ createdAt: -1 }));
};

exports.clearNotifications = async (req, res) => {
  await Notification.updateMany({}, { isRead: true });
  res.json({ success: true });
};

exports.deleteNotifications = async (req, res) => {
  await Notification.deleteMany({});
  res.json({ success: true });
};

// birthday auto check (same logic)
exports.checkTodayBirthdays = async () => {
  const today = new Date();
  const customers = await BirthdayCustomer.find();

  for (let c of customers) {
    const dob = new Date(c.dob);

    if (
      dob.getDate() === today.getDate() &&
      dob.getMonth() === today.getMonth()
    ) {
      const exists = await Notification.findOne({
        type: "birthday",
        message: `${c.name}'s birthday today`,
      });

      if (!exists) {
        await Notification.create({
          title: "Birthday Today 🎂",
          message: `${c.name}'s birthday today`,
          type: "birthday",
          link: "/admin/birthdays",
        });
      }
    }
  }
};
