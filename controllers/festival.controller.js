const Festival = require("../models/Festival");
const Appointment = require("../models/Appointment");
const sendEmail = require("../utils/sendEmail");

// ================= GET =================

exports.getFestivals = async (req, res) => {
  const data = await Festival.find();
  res.json(data);
};

// ================= ADD =================

exports.addFestival = async (req, res) => {
  const fest = new Festival(req.body);
  await fest.save();
  res.json({ success: true });
};

// ================= DELETE =================

exports.deleteFestival = async (req, res) => {
  await Festival.findByIdAndDelete(req.params.id);
  res.json({ success: true });
};

// ================= SEND WISH =================

exports.sendFestivalWish = async (req, res) => {
  const fest = await Festival.findById(req.params.id);

  // GET ALL CUSTOMER EMAILS
  const customers = await Appointment.find({ status: "completed" });

  const emails = customers.map((c) => c.email);

  // EMAIL TEMPLATE
  const html = `
<h2>${fest.name} Wishes from Brown Hair Salon 🎉</h2>
<p>${fest.message}</p>
<br/>
<p>Visit Us Again 💇</p>
<b>Brown Hair The Unisex Salon</b>
`;

  // SEND TO ALL
  for (let email of emails) {
    await sendEmail({
      to: email,
      subject: fest.subject,
      html,
    });
  }

  res.json({ success: true });
};
