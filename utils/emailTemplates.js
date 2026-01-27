const LOGO_URL =
  "https://res.cloudinary.com/dsjypyora/image/upload/v1769510490/brown-circle-logo_bm8nhy.png";

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

// =======================================================
// COMMON HEADER (LOGO LEFT + NAME CENTERED PERFECT)
// =======================================================

const HEADER = `
<div style="text-align:center;margin-bottom:20px;">
  <img 
    src="${LOGO_URL}" 
    alt="Brown Hair Salon Logo"
    style="width:60px;display:inline-block;"
  />
</div>
`;

// =======================================================
// 1️⃣ CUSTOMER - PENDING
// =======================================================

exports.customerPendingTemplate = (data) => `
<!DOCTYPE html>
<html>
<body style="font-family:Arial;background:#f6f4f0;padding:30px;">

<div style="max-width:650px;margin:auto;background:#fff;padding:25px;border-radius:10px;">

${HEADER}

<h3 style="text-align:center;">
✨ Appointment Request Received!
</h3>

<p>Hello <b>${data.name}</b>,</p>

<p>
Thank you for booking an appointment with Brown Hair – The Unisex Salon ✨  
We have received your appointment request and it is currently under review.
</p>

<div style="background:#f1ede7;padding:15px;border-radius:8px;">
<p>💇 Service: ${data.category}</p>
<p>📅 Preferred Date: ${data.date}</p>
<p>⏰ Preferred Time: ${data.time}</p>
<p>📌 Status: ⏳ Pending Approval</p>
</div>

<p>
Our team will confirm or update your booking shortly.
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

// =======================================================
// 2️⃣ ADMIN - NEW APPOINTMENT
// =======================================================

exports.adminNewAppointmentTemplate = (data) => `
<!DOCTYPE html>
<html>
<body style="font-family:Arial;background:#f6f6f6;padding:30px;">

<div style="max-width:650px;margin:auto;background:#fff;padding:25px;border-radius:10px;">

${HEADER}

<h3 style="text-align:center;">📅 New Appointment Request</h3>

<div style="background:#f2f2f2;padding:15px;border-radius:8px;">
<p>👤 Name: ${data.name}</p>
<p>📞 Phone: ${data.phone}</p>
<p>📧 Email: ${data.email}</p>
<p>💇 Service: ${data.category}</p>
<p>📅 Date: ${data.date}</p>
<p>⏰ Time: ${data.time}</p>
<p>📌 Status: Pending</p>
</div>

<p>
Please login to admin panel to approve or reject this appointment.
</p>

${FOOTER}

</div>
</body>
</html>
`;

// =======================================================
// 3️⃣ STATUS UPDATE (APPROVED / REJECTED)
// =======================================================

exports.statusUpdateTemplate = (data, status) => `
<!DOCTYPE html>
<html>
<body style="font-family:Arial;background:#f6f4f0;padding:30px;">

<div style="max-width:650px;margin:auto;background:#fff;padding:25px;border-radius:10px;">

${HEADER}

<h3 style="text-align:center;">
Appointment Status Update
</h3>

<p>Hello <b>${data.name}</b>,</p>

<div style="background:#f1ede7;padding:15px;border-radius:8px;">
<p>💇 Service: ${data.category}</p>
<p>📅 Date: ${data.date}</p>
<p>⏰ Time: ${data.time}</p>
<p>📌 Status: ${status.toUpperCase()}</p>
</div>

<p>
${
  status === "approved"
    ? "✅ Your appointment is confirmed. Please arrive 10 minutes early."
    : "❌ Unfortunately we couldn’t accommodate this slot. You may book again anytime."
}
</p>

<p>
Best regards,<br/>
<b>Brown Hair – The Unisex Salon</b>
</p>

${FOOTER}

</div>
</body>
</html>
`;

// ======================= BIRTHDAY EMAIL TEMPLATE ================================ //

exports.birthdayTemplate = (data) => `
<!DOCTYPE html>
<html>
<body style="font-family:Arial;background:#f6f4f0;padding:30px;">

<div style="max-width:650px;margin:auto;background:#fff;padding:25px;border-radius:10px;">

  <!-- Logo Center -->
  <div style="text-align:center;margin-bottom:20px;">
    <img 
      src="${LOGO_URL}" 
      alt="Brown Hair Salon Logo"
      style="width:60px;display:inline-block;"
    />
  </div>

  <h3 style="text-align:center;">
    🎉 Happy Birthday ${data.name}! 🎂
  </h3>

  <p>Hello <b>${data.name}</b>,</p>

  <p>
    The entire team at <b>Brown Hair – The Unisex Salon</b> wishes you a very
    Happy Birthday! ✨
  </p>

  <p>
    May your day be filled with happiness, confidence, and great style 💇‍♂️💇‍♀️
  </p>

  <div style="background:#f1ede7;padding:15px;border-radius:8px;">
    <p>
      🎁 As a special birthday treat, we invite you to visit us soon and enjoy 
      our premium salon services.
    </p>
  </div>

  <p>
    We look forward to celebrating many more beautiful moments with you!
  </p>

  <p>
    Warm wishes,<br/>
    <b>Team Brown Hair Salon</b>
  </p>

  ${FOOTER}

</div>
</body>
</html>
`;
