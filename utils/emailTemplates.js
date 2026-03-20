const LOGO_URL =
  "https://res.cloudinary.com/dsjypyora/image/upload/v1769510490/brown-circle-logo_bm8nhy.png";

// 🎯 PREMIUM HEADER
const HEADER = `
<div style="text-align:center;padding:20px 0;background:linear-gradient(135deg,#111827,#1f2937);">
  <img src="${LOGO_URL}" style="width:55px;margin-bottom:8px;" />
  <h2 style="color:#fff;margin:0;font-size:18px;letter-spacing:1px;">
    Brown Hair Salon
  </h2>
</div>
`;

// 🎯 PREMIUM FOOTER
const FOOTER = `
<div style="margin-top:25px;padding:15px;background:#f9fafb;text-align:center;font-size:12px;color:#777;">
  📞 +91-9623345713 <br/>
  🌐 www.brownhairsalon.com <br/>
  📍 Nagpur
  <p style="margin-top:10px;font-size:11px;color:#aaa;">
    You received this email because you booked with us.
  </p>
</div>
`;

// ======== CUSTOMER CONFIRMED ======== //

exports.customerConfirmedTemplate = (data) => `
<!DOCTYPE html>
<html>
<body style="margin:0;background:#f4f6f8;font-family:Arial;">

<div style="max-width:600px;margin:30px auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 10px 25px rgba(0,0,0,0.08);">

${HEADER}

<div style="padding:25px;">
  <h3 style="text-align:center;color:#16a34a;">🎉 Appointment Confirmed</h3>

  <p>Hello <b>${data.name}</b>,</p>

  <p>Your booking is successfully confirmed.</p>

  <div style="background:#f9fafb;padding:15px;border-radius:10px;">
    <p><b>Service:</b> ${data.category}</p>
    <p><b>Date:</b> ${data.date}</p>
    <p><b>Time:</b> ${data.time}</p>
    <p><b>Status:</b> <span style="color:#16a34a;font-weight:bold;">Confirmed</span></p>
  </div>

  <p style="margin-top:15px;">Please arrive 10 minutes early.</p>

</div>

${FOOTER}
</div>
</body>
</html>
`;

// ======== ADMIN NEW BOOKING ======== //

exports.adminNewAppointmentTemplate = (data) => `
<!DOCTYPE html>
<html>
<body style="margin:0;background:#f4f6f8;font-family:Arial;">

<div style="max-width:600px;margin:30px auto;background:#fff;border-radius:12px;overflow:hidden;">

${HEADER}

<div style="padding:25px;">
  <h3 style="text-align:center;">📅 New Booking</h3>

  <div style="background:#f3f4f6;padding:15px;border-radius:10px;">
    <p><b>Name:</b> ${data.name}</p>
    <p><b>Phone:</b> ${data.phone}</p>
    <p><b>Email:</b> ${data.email}</p>
    <p><b>Service:</b> ${data.category}</p>
    <p><b>Date:</b> ${data.date}</p>
    <p><b>Time:</b> ${data.time}</p>
  </div>

</div>

${FOOTER}
</div>
</body>
</html>
`;

// ======== STATUS UPDATE ======== //

exports.statusUpdateTemplate = (data, status) => {
  const colors = {
    completed: "#16a34a",
    cancelled: "#dc2626",
    "no-show": "#ca8a04",
    confirmed: "#2563eb",
  };

  const color = colors[status] || "#2563eb";

  return `
<!DOCTYPE html>
<html>
<body style="margin:0;background:#f4f6f8;font-family:Arial;">

<div style="max-width:600px;margin:30px auto;background:#fff;border-radius:12px;overflow:hidden;">

${HEADER}

<div style="padding:25px;">
  <h3 style="text-align:center;color:${color};">
    Booking ${status.toUpperCase()}
  </h3>

  <p>Hello <b>${data.name}</b>,</p>

  <div style="background:#f9fafb;padding:15px;border-radius:10px;">
    <p><b>Service:</b> ${data.category}</p>
    <p><b>Date:</b> ${data.date}</p>
    <p><b>Time:</b> ${data.time}</p>
    <p><b>Status:</b> <span style="color:${color};font-weight:bold;">${status}</span></p>
  </div>

  ${
    status === "completed"
      ? `<p style="margin-top:15px;">Thank you for visiting us ❤️</p>`
      : status === "cancelled"
        ? `<p style="margin-top:15px;">Your booking has been cancelled.</p>`
        : status === "no-show"
          ? `<p style="margin-top:15px;">You missed your appointment.</p>`
          : ""
  }

</div>

${FOOTER}
</div>
</body>
</html>
`;
};

// ======== REMINDER ======== //

exports.reminderTemplate = (data) => `
<!DOCTYPE html>
<html>
<body style="margin:0;background:#f4f6f8;font-family:Arial;">

<div style="max-width:600px;margin:30px auto;background:#fff;border-radius:12px;overflow:hidden;">

${HEADER}

<div style="padding:25px;">
  <h3 style="text-align:center;color:#2563eb;">⏰ Reminder</h3>

  <p>Hello <b>${data.name}</b>,</p>

  <p>Your appointment is in 30 minutes.</p>

  <div style="background:#f9fafb;padding:15px;border-radius:10px;">
    <p><b>Service:</b> ${data.category}</p>
    <p><b>Date:</b> ${data.date}</p>
    <p><b>Time:</b> ${data.time}</p>
  </div>

</div>

${FOOTER}
</div>
</body>
</html>
`;

// ======== BIRTHDAY ======== //

exports.birthdayTemplate = ({ name }) => `
<!DOCTYPE html>
<html>
<body style="margin:0;background:#f4f6f8;font-family:Arial;">

<div style="max-width:600px;margin:30px auto;background:#fff;border-radius:12px;overflow:hidden;">

${HEADER}

<div style="padding:25px;text-align:center;">
  <h3>🎉 Happy Birthday ${name}</h3>

  <p>We wish you a fantastic year ahead ✨</p>

  <div style="margin-top:15px;background:#f9fafb;padding:15px;border-radius:10px;">
    🎁 Visit us for a special birthday experience!
  </div>

</div>

${FOOTER}
</div>
</body>
</html>
`;
