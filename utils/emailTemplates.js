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
  const config = {
    completed: {
      title: "✨ Service Completed Successfully",
      color: "#16a34a",
      message:
        "We’re delighted to inform you that your appointment has been successfully completed.",
    },
    cancelled: {
      title: "⚠️ Appointment Cancelled",
      color: "#dc2626",
      message:
        "Your appointment has been cancelled. If this was not intended, you can easily reschedule.",
    },
    "no-show": {
      title: "⏰ Appointment Missed",
      color: "#ca8a04",
      message:
        "We noticed that you couldn’t attend your scheduled appointment.",
    },
    confirmed: {
      title: "🎉 Booking Confirmed",
      color: "#2563eb",
      message: "Your appointment has been successfully confirmed.",
    },
  };

  const c = config[status] || config.confirmed;

  return `
<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#f4f6f8;font-family:Arial,sans-serif;">

<div style="max-width:650px;margin:30px auto;background:#ffffff;border-radius:14px;overflow:hidden;box-shadow:0 15px 40px rgba(0,0,0,0.08);">

  <!-- HEADER -->
  <div style="background:linear-gradient(135deg,#111827,#1f2937);padding:25px;text-align:center;">
    <img src="${LOGO_URL}" style="width:60px;margin-bottom:10px;" />
    <h2 style="color:#fff;margin:0;">Brown Hair – The Unisex Salon</h2>
    <p style="color:#cbd5e1;font-size:12px;margin-top:5px;">
      Premium Grooming Experience
    </p>
  </div>

  <!-- BODY -->
  <div style="padding:30px;">

    <h3 style="text-align:center;color:${c.color};margin-bottom:10px;">
      ${c.title}
    </h3>

    <p style="font-size:15px;color:#333;">
      Hello <b>${data.name}</b>,
    </p>

    <p style="color:#555;line-height:1.6;">
      ${c.message}
    </p>

    <!-- DETAILS CARD -->
    <div style="margin-top:25px;background:#f9fafb;border-radius:12px;padding:20px;">
      <h4 style="margin-top:0;color:#111;">📋 Appointment Details</h4>

      <table style="width:100%;font-size:14px;color:#444;">
        <tr>
          <td><b>Service</b></td>
          <td>${data.category}</td>
        </tr>
        <tr>
          <td><b>Date</b></td>
          <td>${data.date}</td>
        </tr>
        <tr>
          <td><b>Time</b></td>
          <td>${data.time}</td>
        </tr>
        <tr>
          <td><b>Status</b></td>
          <td style="color:${c.color};font-weight:bold;">
            ${status.toUpperCase()}
          </td>
        </tr>
      </table>
    </div>

    ${
      status === "completed"
        ? `
    <div style="margin-top:25px;">
      <p style="color:#555;line-height:1.6;">
        We truly hope you enjoyed your experience with us. Your satisfaction is our top priority.
      </p>

      <p style="color:#555;">
        If you loved our service, we would really appreciate your feedback.
      </p>

      <div style="text-align:center;margin-top:15px;">
        <a href="https://g.page/r/CTlJ6nV9k3IGEAE/review"
        style="background:#d4af37;color:#fff;padding:12px 22px;border-radius:6px;text-decoration:none;font-weight:bold;">
          ⭐ Leave a Review
        </a>
      </div>
    </div>
    `
        : ""
    }

    ${
      status === "cancelled"
        ? `
    <div style="margin-top:20px;color:#555;">
      You can easily book another appointment anytime at your convenience.
    </div>
    `
        : ""
    }

    ${
      status === "no-show"
        ? `
    <div style="margin-top:20px;color:#555;">
      We completely understand that plans can change. We look forward to serving you again soon.
    </div>
    `
        : ""
    }

    <!-- FOOT MESSAGE -->
    <p style="margin-top:30px;color:#444;">
      Warm regards,<br/>
      <b>Team Brown Hair Salon</b>
    </p>

  </div>

  <!-- FOOTER -->
  <div style="background:#f9fafb;padding:20px;text-align:center;font-size:13px;color:#777;">
    📞 +91-9623345713 <br/>
    🌐 www.brownhairsalon.com <br/>
    📍 Nagpur

    <p style="margin-top:10px;font-size:11px;color:#aaa;">
      This is an automated message. Please do not reply.
    </p>
  </div>

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

    <h3 style="text-align:center;color:#2563eb;">
      ⏰ Appointment Reminder
    </h3>

    <p>Hello <b>${data.name}</b>,</p>

    <p>
      This is a reminder that your appointment is scheduled shortly.
    </p>

    <div style="background:#f9fafb;padding:15px;border-radius:10px;">
      <p><b>Service:</b> ${data.category || data.serviceName}</p>
      <p><b>Date:</b> ${data.date}</p>
      <p><b>Time:</b> ${data.time}</p>
    </div>

    <p style="margin-top:15px;">
      Please arrive <b>10 minutes before</b> your scheduled time.
    </p>

    <p>
      We look forward to serving you.
    </p>

    <p style="margin-top:20px;">
      Regards,<br/>
      <b>Brown Hair Salon</b>
    </p>

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
