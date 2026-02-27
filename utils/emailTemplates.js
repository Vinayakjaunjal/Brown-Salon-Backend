const LOGO_URL =
  "https://res.cloudinary.com/dsjypyora/image/upload/v1769510490/brown-circle-logo_bm8nhy.png";

const HEADER = `
<div style="text-align:center;margin-bottom:20px;">
  <img 
    src="${LOGO_URL}" 
    alt="Brown Hair Salon Logo"
    style="width:60px;display:inline-block;"
  />
</div>
`;

const FOOTER = `
<hr style="margin:20px 0;border:none;border-top:1px solid #eee;"/>

<p style="font-size:13px;color:#555;line-height:1.6;">
📞 +91-9623345713 <br/>
🌐 www.brownhairsalon.com <br/>
📍 Brown Hair The Unisex Salon, Nagpur
</p>

<p style="font-size:12px;color:#999;">
You received this email because you booked an appointment with us.
</p>
`;

// ========2️⃣ CUSTOMER CONFIRMED EMAIL ========= //

exports.customerConfirmedTemplate = (data) => `
<!DOCTYPE html>
<html>
<body style="font-family:Arial;background:#f6f4f0;padding:30px;">

<div style="max-width:650px;margin:auto;background:#fff;padding:25px;border-radius:10px;">

${HEADER}

<h3 style="text-align:center;">
🎉 Appointment Confirmed!
</h3>

<p>Hello <b>${data.name}</b>,</p>

<p>
Your appointment with Brown Hair – The Unisex Salon has been successfully confirmed.
</p>

<div style="background:#f1ede7;padding:15px;border-radius:8px;">
<p>💇 Service: ${data.category}</p>
<p>📅 Date: ${data.date}</p>
<p>⏰ Time: ${data.time}</p>
<p>📌 Status: ✅ Confirmed</p>
</div>

<p>
We look forward to serving you. Please arrive 10 minutes before your appointment.
</p>

<p>
Warm regards,<br/>
<b>Brown Hair – The Unisex Salon</b>
</p>

${FOOTER}

</div>
</body>
</html>
`;

// ========2️⃣ ADMIN - NEW APPOINTMENT ========= //

exports.adminNewAppointmentTemplate = (data) => `
<!DOCTYPE html>
<html>
<body style="font-family:Arial;background:#f6f6f6;padding:30px;">

<div style="max-width:650px;margin:auto;background:#fff;padding:25px;border-radius:10px;">

${HEADER}

<h3 style="text-align:center;">📅 New Appointment Booked</h3>

<div style="background:#f2f2f2;padding:15px;border-radius:8px;">
<p>👤 Name: ${data.name}</p>
<p>📞 Phone: ${data.phone}</p>
<p>📧 Email: ${data.email}</p>
<p>💇 Service: ${data.category}</p>
<p>📅 Date: ${data.date}</p>
<p>⏰ Time: ${data.time}</p>
<p>📌 Status: ✅ Confirmed</p>
</div>

<p>
A new appointment has been successfully booked.
</p>

${FOOTER}

</div>
</body>
</html>
`;

// ========3️⃣ STATUS UPDATE ======== //

exports.statusUpdateTemplate = (data, status) => `
<!DOCTYPE html>
<html>
<body style="font-family:Arial;background:#f6f4f0;padding:30px;">

<div style="max-width:650px;margin:auto;background:#fff;padding:25px;border-radius:10px;">

${HEADER}

<h3 style="text-align:center;">
📢 Appointment Status Update
</h3>

<p>Hello <b>${data.name}</b>,</p>

<div style="background:#f1ede7;padding:15px;border-radius:8px;">
<p>💇 Service: ${data.category}</p>
<p>📅 Date: ${data.date}</p>
<p>⏰ Time: ${data.time}</p>
<p>📌 Status: <b>${status.toUpperCase()}</b></p>
</div>

${
  status === "completed"
    ? `
<p>
Thank you for visiting Brown Hair – The Unisex Salon today.
</p>

<p>
We’re happy to inform you that your appointment has been successfully completed.
We truly hope you had a wonderful experience with our service.
</p>

<p>
Your satisfaction is our priority, and we look forward to welcoming you again soon.
</p>
`
    : status === "cancelled"
      ? `
<p>
Your appointment has been cancelled as per request or availability.
</p>

<p>
You may visit our website anytime to book a new appointment at your convenience.
</p>
`
      : status === "no-show"
        ? `
<p>
We noticed that you were unable to attend your scheduled appointment with us.
</p>

<p>
We completely understand that plans can change.
You’re always welcome to book a new appointment at your preferred time.
</p>

<p>
We look forward to serving you soon.
</p>
`
        : ""
}

<p>
Warm regards,<br/>
<b>Brown Hair – The Unisex Salon</b><br/>
Nagpur
</p>

${FOOTER}

</div>
</body>
</html>
`;

// ======== BIRTHDAY EMAIL TEMPLATE ========//

exports.birthdayTemplate = ({ name }) => `
<!DOCTYPE html>
<html>
<body style="font-family:Arial;background:#f6f4f0;padding:30px;">

<div style="max-width:650px;margin:auto;background:#fff;padding:25px;border-radius:10px;">

${HEADER}

<h3 style="text-align:center;">🎉 Happy Birthday ${name}! 🎂</h3>

<p>Hello <b>${name}</b>,</p>

<p>
The entire team at <b>Brown Hair – The Unisex Salon</b> wishes you a wonderful birthday filled with happiness and confidence ✨
</p>

<div style="background:#f1ede7;padding:15px;border-radius:8px;">
<p>
🎁 As a birthday treat, we invite you to visit us soon and enjoy our premium salon services.
</p>
</div>

<p>Warm wishes,<br/><b>Team Brown Hair Salon</b></p>

${FOOTER}

</div>
</body>
</html>
`;
