const Festival = require("../models/Festival");
const sendEmail = require("../utils/sendEmail");
const Customer = require("../models/Customer");

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

  // UNIQUE CUSTOMER EMAIL LIST
  const customers = await Customer.find({
    email: { $ne: null },
  });

  const emails = customers.map((c) => c.email);

  // EMAIL TEMPLATE
  const html = `
<h2>${fest.name} Wishes from Brown Hair Salon 🎉</h2>
<p>${fest.message}</p>
<br/>
<p>We look forward to serving you again 💇</p>
<b>Brown Hair The Unisex Salon</b>
`;

  // FAST BULK SEND
  await Promise.all(
    emails.map((email) =>
      sendEmail({
        to: email,
        subject: fest.subject,
        html,
      }),
    ),
  );

  res.json({ success: true });
};
