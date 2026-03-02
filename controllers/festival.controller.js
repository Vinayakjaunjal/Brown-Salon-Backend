const Festival = require("../models/Festival");
const Appointment = require("../models/Appointment");
const sendEmail = require("../utils/sendEmail");

exports.createFestival = async (req, res) => {
  const data = await Festival.create(req.body);
  res.json(data);
};

exports.getFestivals = async (req, res) => {
  const data = await Festival.find().sort({ date: 1 });
  res.json(data);
};

exports.sendWish = async (req, res) => {
  const fest = await Festival.findById(req.params.id);

  const customers = await Appointment.distinct("email");

  for (let email of customers) {
    await sendEmail({
      to: email,
      subject: fest.subject,
      html: `
      <h2>${fest.name} Wishes 🎉</h2>
      <p>${fest.message}</p>
      <br/>
      <p>Brown Hair – The Unisex Salon</p>
      `,
    });
  }

  fest.sent = true;
  await fest.save();

  res.json({ success: true });
};
