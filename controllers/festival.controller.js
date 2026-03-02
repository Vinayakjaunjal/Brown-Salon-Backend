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

// ================= SEND FESTIVAL WISH =================

exports.sendFestivalWish = async (req, res) => {
  try {
    const fest = await Festival.findById(req.params.id);

    if (!fest) {
      return res.status(404).json({
        message: "Festival not found",
      });
    }

    // ================= UNIQUE CUSTOMER EMAILS =================

    const customers = await Customer.find({
      email: { $ne: null },
    });

    const emails = [
      ...new Set(customers.map((c) => c.email.toLowerCase().trim())),
    ];

    console.log("Total customers:", emails.length);

    // ================= EMAIL TEMPLATE =================

    const html = `
    <h2>${fest.name} Wishes from Brown Hair Salon 🎉</h2>
    <p>${fest.message}</p>
    <br/>
    <p>We look forward to serving you again 💇</p>
    <b>Brown Hair The Unisex Salon</b>
    `;

    // ================= THROTTLED SEND =================

    let sent = 0;
    let failed = 0;

    for (let email of emails) {
      try {
        await sendEmail({
          to: email,
          subject: fest.subject,
          html,
        });

        sent++;

        // SMTP safe delay (IMPORTANT)
        await new Promise((resolve) => setTimeout(resolve, 500));
      } catch (err) {
        console.log("Failed:", email);
        failed++;
      }
    }

    console.log("Sent:", sent);
    console.log("Failed:", failed);

    res.json({
      success: true,
      message: `Festival wish sent to ${sent} customers`,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Festival wish failed",
    });
  }
};
