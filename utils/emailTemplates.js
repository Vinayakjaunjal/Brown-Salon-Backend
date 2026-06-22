"use strict";

// ─────────────────────────────────────────────
//  SHARED ASSETS
// ─────────────────────────────────────────────
const LOGO_URL =
  "https://res.cloudinary.com/dsjypyora/image/upload/v1769510490/brown-circle-logo_bm8nhy.png";

const SALON_HERO_IMG =
  "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=600&q=80";

// ─────────────────────────────────────────────
//  DATE FORMATTER  → "Friday, 19 June 2026"
// ─────────────────────────────────────────────
function formatDate(dateInput) {
  const d = dateInput instanceof Date ? dateInput : new Date(dateInput);
  if (isNaN(d)) return dateInput; // fallback if already a string
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return `${days[d.getDay()]}, ${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

// ─────────────────────────────────────────────
//  COMMON HEADER  (logo + tagline, white bg)
// ─────────────────────────────────────────────
const HEADER = `
<div style="background:#ffffff;text-align:center;padding:28px 24px 18px;">
  <p style="margin:0 0 10px;font-size:12px;letter-spacing:3px;color:#b8972a;font-family:Georgia,serif;">
    Style. <strong>Groom.</strong> Shine.
  </p>
  <div style="display:inline-flex;align-items:center;gap:14px;">
    <img src="${LOGO_URL}" width="56" height="56"
         style="border-radius:50%;border:2px solid #c9a84c;display:block;" alt="Brown Hair Logo" />
    <div style="text-align:left;">
      <div style="font-size:28px;font-weight:900;letter-spacing:2px;color:#1a1a1a;font-family:Georgia,serif;line-height:1;">
        BROWN HAIR
      </div>
      <div style="font-size:11px;letter-spacing:4px;color:#888;border-top:1px solid #c9a84c;border-bottom:1px solid #c9a84c;padding:3px 0;margin-top:4px;">
        &mdash;&nbsp; THE UNISEX SALON &nbsp;&mdash;
      </div>
    </div>
  </div>
</div>
`;

// ─────────────────────────────────────────────
//  COMMON FOOTER  (3-column: Call / Email / Hours)
// ─────────────────────────────────────────────
const FOOTER = `
<div style="padding:28px 24px;background:#f8f8f6;">

  <!-- Bell row -->
  <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
    <tr>
      <td width="50%" style="background:#f0ede6;border-radius:10px 0 0 10px;padding:16px 20px;vertical-align:middle;">
        <table cellpadding="0" cellspacing="0">
          <tr>
            <td style="padding-right:12px;vertical-align:middle;">
              <div style="width:36px;height:36px;background:#f5f0e8;border-radius:50%;text-align:center;line-height:36px;font-size:18px;">🔔</div>
            </td>
            <td style="font-size:13px;color:#555;font-family:Arial,sans-serif;">Please arrive 10 minutes early.</td>
          </tr>
        </table>
      </td>
      <td width="4px" style="background:#c9a84c;"></td>
      <td width="50%" style="background:#f0ede6;border-radius:0 10px 10px 0;padding:16px 20px;vertical-align:middle;font-size:13px;color:#555;font-family:Arial,sans-serif;">
        Need to reschedule or cancel?<br/>Contact us as soon as possible.
      </td>
    </tr>
  </table>

  <!-- 3-col contact row -->
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td width="33%" style="text-align:center;border-right:1px solid #e0dbd0;padding:0 12px;">
        <div style="width:42px;height:42px;background:#1a1a1a;border-radius:50%;margin:0 auto 8px;text-align:center;line-height:42px;font-size:18px;">📞</div>
        <div style="font-size:11px;font-weight:700;letter-spacing:2px;color:#1a1a1a;font-family:Arial,sans-serif;">CALL US</div>
        <div style="font-size:12px;color:#666;margin-top:3px;font-family:Arial,sans-serif;">+91 98233 45713</div>
      </td>
      <td width="33%" style="text-align:center;border-right:1px solid #e0dbd0;padding:0 12px;">
        <div style="width:42px;height:42px;background:#1a1a1a;border-radius:50%;margin:0 auto 8px;text-align:center;line-height:42px;font-size:18px;">✉️</div>
        <div style="font-size:11px;font-weight:700;letter-spacing:2px;color:#1a1a1a;font-family:Arial,sans-serif;">EMAIL US</div>
        <div style="font-size:12px;color:#666;margin-top:3px;font-family:Arial,sans-serif;">info@brownhairsalon.com</div>
      </td>
      <td width="33%" style="text-align:center;padding:0 12px;">
        <div style="width:42px;height:42px;background:#1a1a1a;border-radius:50%;margin:0 auto 8px;text-align:center;line-height:42px;font-size:18px;">🕐</div>
        <div style="font-size:11px;font-weight:700;letter-spacing:2px;color:#1a1a1a;font-family:Arial,sans-serif;">OPENING HOURS</div>
        <div style="font-size:12px;color:#666;margin-top:3px;font-family:Arial,sans-serif;">10:00 AM – 9:00 PM</div>
      </td>
    </tr>
  </table>

  <p style="margin:20px 0 0;text-align:center;font-size:11px;color:#aaa;font-family:Arial,sans-serif;">
    This is an automated message from Brown Hair – The Unisex Salon, Nagpur.
  </p>
</div>
`;

// ─────────────────────────────────────────────
//  HELPER: Dark hero banner
// ─────────────────────────────────────────────
function heroBanner(titleLine1, titleLine2Gold, subtitle, bodyLine) {
  return `
<div style="position:relative;overflow:hidden;background:#1a1208;">
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <!-- Left text area -->
      <td width="52%" style="padding:40px 32px 48px;vertical-align:middle;">
        <div style="font-size:30px;font-weight:700;color:#ffffff;font-family:Georgia,serif;line-height:1.2;margin-bottom:6px;">
          ${titleLine1}
        </div>
        <div style="font-size:32px;font-weight:700;color:#c9a84c;font-family:Georgia,serif;line-height:1.2;margin-bottom:22px;">
          ${titleLine2Gold}
        </div>
        <div style="width:40px;height:2px;background:#c9a84c;margin-bottom:18px;"></div>
        <div style="font-size:14px;font-weight:700;color:#ffffff;font-family:Arial,sans-serif;margin-bottom:6px;">${subtitle}</div>
        <div style="font-size:13px;color:#ccc;font-family:Arial,sans-serif;line-height:1.6;">${bodyLine}</div>
      </td>
      <!-- Right salon image -->
      <td width="48%" style="vertical-align:top;">
        <img src="${SALON_HERO_IMG}" width="100%"
             style="display:block;min-height:220px;object-fit:cover;" alt="Brown Hair Salon" />
      </td>
    </tr>
  </table>
</div>
`;
}

// ─────────────────────────────────────────────
//  HELPER: Details row inside card
// ─────────────────────────────────────────────
function detailRow(icon, label, value, highlight) {
  const val = highlight
    ? `<span style="display:inline-block;background:#dcfce7;color:#16a34a;font-weight:700;font-size:12px;
         padding:3px 12px;border-radius:20px;letter-spacing:1px;">✔ ${value}</span>`
    : `<span style="color:#1a1a1a;font-size:14px;">${value}</span>`;
  return `
<tr>
  <td style="padding:8px 0;width:28px;vertical-align:middle;font-size:16px;">${icon}</td>
  <td style="padding:8px 12px 8px 6px;width:90px;font-size:13px;color:#777;font-family:Arial,sans-serif;">${label}</td>
  <td style="padding:8px 0;font-size:13px;color:#777;width:14px;">:</td>
  <td style="padding:8px 0 8px 12px;font-family:Arial,sans-serif;">${val}</td>
</tr>`;
}

// ─────────────────────────────────────────────
//  WRAPPER
// ─────────────────────────────────────────────
function wrap(body) {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
<body style="margin:0;padding:0;background:#f0ede6;font-family:Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f0ede6;padding:32px 0;">
<tr><td align="center">
<table width="620" cellpadding="0" cellspacing="0"
       style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 8px 40px rgba(0,0,0,0.12);max-width:620px;">
<tr><td>
${body}
</td></tr>
</table>
</td></tr>
</table>
</body>
</html>`;
}

// ═══════════════════════════════════════════════════════════════
//  1. CUSTOMER CONFIRMED
// ═══════════════════════════════════════════════════════════════
exports.customerConfirmedTemplate = (data) =>
  wrap(`
${HEADER}
${heroBanner("Appointment", "Confirmed!", `Hello ${data.name},`, "Your appointment has been successfully scheduled.")}

<!-- White details card -->
<div style="padding:0 24px 28px;">
  <div style="background:#fff;border-radius:16px;box-shadow:0 4px 24px rgba(0,0,0,0.08);margin-top:-20px;position:relative;overflow:hidden;">
    <table width="100%" cellpadding="0" cellspacing="0">
      <!-- Left: date/time -->
      <tr>
        <td width="45%" style="padding:30px 24px 28px;border-right:1px solid #f0ede6;text-align:center;vertical-align:top;">
          <div style="width:52px;height:52px;background:#f5f0e8;border-radius:50%;margin:0 auto 14px;text-align:center;line-height:52px;font-size:22px;">📅</div>
          <div style="font-size:10px;font-weight:700;letter-spacing:3px;color:#c9a84c;margin-bottom:12px;font-family:Arial,sans-serif;">YOUR APPOINTMENT</div>
          <div style="font-size:20px;font-weight:700;color:#1a1a1a;font-family:Georgia,serif;line-height:1.3;">${formatDate(data.date)}</div>
          <div style="font-size:16px;color:#c9a84c;font-weight:600;margin-top:4px;font-family:Arial,sans-serif;">at ${data.time}</div>
          <div style="margin-top:22px;">
            <a href="#" style="display:inline-block;background:#c9a84c;color:#fff;padding:11px 20px;border-radius:8px;text-decoration:none;font-size:12px;font-weight:700;letter-spacing:1px;font-family:Arial,sans-serif;">
              📅&nbsp; ADD TO CALENDAR
            </a>
          </div>
        </td>
        <!-- Right: details -->
        <td width="55%" style="padding:30px 28px 28px;vertical-align:top;">
          <div style="font-size:10px;font-weight:700;letter-spacing:3px;color:#c9a84c;margin-bottom:14px;border-bottom:1px solid #c9a84c;padding-bottom:10px;font-family:Arial,sans-serif;">APPOINTMENT DETAILS</div>
          <table cellpadding="0" cellspacing="0">
            ${detailRow("✂️", "Service", data.category)}
            ${detailRow("👤", "Artist", data.artist)}
            ${detailRow("₹", "Amount", data.amount || "₹150")}
            ${detailRow("✔", "Status", "CONFIRMED", true)}
          </table>
        </td>
      </tr>
    </table>
  </div>
</div>

${FOOTER}
`);

// ═══════════════════════════════════════════════════════════════
//  2. ADMIN NEW BOOKING
// ═══════════════════════════════════════════════════════════════
exports.adminNewAppointmentTemplate = (data) =>
  wrap(`
${HEADER}
${heroBanner("New Booking", "Received!", "A new appointment has been made.", "Review the details below and take action if needed.")}

<div style="padding:0 24px 28px;">
  <div style="background:#fff;border-radius:16px;box-shadow:0 4px 24px rgba(0,0,0,0.08);margin-top:-20px;position:relative;overflow:hidden;">
    <table width="100%" cellpadding="0" cellspacing="0">
      <!-- Left: customer info -->
      <tr>
        <td width="45%" style="padding:30px 24px 28px;border-right:1px solid #f0ede6;text-align:center;vertical-align:top;">
          <div style="width:52px;height:52px;background:#f5f0e8;border-radius:50%;margin:0 auto 14px;text-align:center;line-height:52px;font-size:22px;">👤</div>
          <div style="font-size:10px;font-weight:700;letter-spacing:3px;color:#c9a84c;margin-bottom:12px;font-family:Arial,sans-serif;">CUSTOMER</div>
          <div style="font-size:18px;font-weight:700;color:#1a1a1a;font-family:Georgia,serif;">${data.name}</div>
          <div style="font-size:13px;color:#666;margin-top:6px;font-family:Arial,sans-serif;">${data.phone}</div>
          <div style="font-size:13px;color:#666;margin-top:4px;font-family:Arial,sans-serif;">${data.email}</div>
          <div style="margin-top:22px;">
            <div style="display:inline-block;background:#dcfce7;color:#16a34a;font-weight:700;font-size:12px;padding:8px 20px;border-radius:20px;letter-spacing:1px;font-family:Arial,sans-serif;">✔ NEW BOOKING</div>
          </div>
        </td>
        <!-- Right: booking details -->
        <td width="55%" style="padding:30px 28px 28px;vertical-align:top;">
          <div style="font-size:10px;font-weight:700;letter-spacing:3px;color:#c9a84c;margin-bottom:14px;border-bottom:1px solid #c9a84c;padding-bottom:10px;font-family:Arial,sans-serif;">BOOKING DETAILS</div>
          <table cellpadding="0" cellspacing="0">
            ${detailRow("✂️", "Service", data.category)}
            ${detailRow("📅", "Date", formatDate(data.date))}
            ${detailRow("⏱", "Time", data.time)}
            ${detailRow("👤", "Artist", data.artist)}
            ${detailRow("₹", "Amount", data.amount || "₹150")}
          </table>
        </td>
      </tr>
    </table>
  </div>
</div>

${FOOTER}
`);

// ═══════════════════════════════════════════════════════════════
//  3. REMINDER
// ═══════════════════════════════════════════════════════════════
exports.reminderTemplate = (data) =>
  wrap(`
${HEADER}
${heroBanner("Appointment", "Reminder!", `Hello ${data.name},`, "Your appointment is coming up soon. We're looking forward to seeing you!")}

<div style="padding:0 24px 28px;">
  <div style="background:#fff;border-radius:16px;box-shadow:0 4px 24px rgba(0,0,0,0.08);margin-top:-20px;position:relative;overflow:hidden;">
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td width="45%" style="padding:30px 24px 28px;border-right:1px solid #f0ede6;text-align:center;vertical-align:top;">
          <div style="width:52px;height:52px;background:#f5f0e8;border-radius:50%;margin:0 auto 14px;text-align:center;line-height:52px;font-size:22px;">⏰</div>
          <div style="font-size:10px;font-weight:700;letter-spacing:3px;color:#c9a84c;margin-bottom:12px;font-family:Arial,sans-serif;">YOUR APPOINTMENT</div>
          <div style="font-size:19px;font-weight:700;color:#1a1a1a;font-family:Georgia,serif;line-height:1.3;">${formatDate(data.date)}</div>
          <div style="font-size:16px;color:#c9a84c;font-weight:600;margin-top:4px;font-family:Arial,sans-serif;">at ${data.time}</div>
          <div style="margin-top:18px;background:#fffbeb;border-radius:8px;padding:10px 14px;font-size:12px;color:#92400e;font-family:Arial,sans-serif;">
            ✔ Arrive <strong>10 mins early</strong>
          </div>
        </td>
        <td width="55%" style="padding:30px 28px 28px;vertical-align:top;">
          <div style="font-size:10px;font-weight:700;letter-spacing:3px;color:#c9a84c;margin-bottom:14px;border-bottom:1px solid #c9a84c;padding-bottom:10px;font-family:Arial,sans-serif;">APPOINTMENT DETAILS</div>
          <table cellpadding="0" cellspacing="0">
            ${detailRow("✂️", "Service", data.category || data.serviceName)}
            ${detailRow("👤", "Artist", data.artist || "–")}
            ${detailRow("📅", "Date", formatDate(data.date))}
            ${detailRow("⏱", "Time", data.time)}
            ${detailRow("✔", "Status", "CONFIRMED", true)}
          </table>
          <div style="margin-top:20px;">
            <a href="https://brownsalon.co.in/profile"
               style="display:inline-block;background:#c9a84c;color:#fff;padding:11px 20px;border-radius:8px;text-decoration:none;font-size:12px;font-weight:700;letter-spacing:1px;font-family:Arial,sans-serif;">
              📋&nbsp; VIEW BOOKING
            </a>
          </div>
        </td>
      </tr>
    </table>
  </div>
</div>

${FOOTER}
`);

// ═══════════════════════════════════════════════════════════════
//  4. STATUS UPDATE  (completed / cancelled / no-show / confirmed)
// ═══════════════════════════════════════════════════════════════
exports.statusUpdateTemplate = (data, status) => {
  const configs = {
    completed: {
      line1: "Service",
      line2Gold: "Completed!",
      subtitle: `Hello ${data.name},`,
      body: "We hope you enjoyed your experience. It was a pleasure serving you!",
      badgeColor: "#16a34a",
      badgeBg: "#dcfce7",
      badgeLabel: "COMPLETED",
      extra: `
        <div style="margin-top:22px;text-align:center;">
          <p style="font-size:13px;color:#555;margin:0 0 14px;font-family:Arial,sans-serif;">
            Loved your experience? Leave us a quick review!
          </p>
          <a href="https://g.page/r/CTlJ6nV9k3IGEAE/review"
             style="display:inline-block;background:#c9a84c;color:#fff;padding:11px 24px;border-radius:8px;text-decoration:none;font-size:13px;font-weight:700;letter-spacing:1px;font-family:Arial,sans-serif;">
            ⭐ Leave a Review
          </a>
        </div>`,
    },
    cancelled: {
      line1: "Appointment",
      line2Gold: "Cancelled",
      subtitle: `Hello ${data.name},`,
      body: "Your appointment has been cancelled. If this was not intended, feel free to reschedule anytime.",
      badgeColor: "#dc2626",
      badgeBg: "#fee2e2",
      badgeLabel: "CANCELLED",
      extra: `<div style="margin-top:18px;font-size:13px;color:#555;font-family:Arial,sans-serif;">You can book a new appointment anytime at your convenience.</div>`,
    },
    "no-show": {
      line1: "Appointment",
      line2Gold: "Missed",
      subtitle: `Hello ${data.name},`,
      body: "We noticed you couldn't make it today. We completely understand — plans change!",
      badgeColor: "#ca8a04",
      badgeBg: "#fef9c3",
      badgeLabel: "NO SHOW",
      extra: `<div style="margin-top:18px;font-size:13px;color:#555;font-family:Arial,sans-serif;">We look forward to welcoming you soon. Book again at your convenience.</div>`,
    },
    confirmed: {
      line1: "Appointment",
      line2Gold: "Confirmed!",
      subtitle: `Hello ${data.name},`,
      body: "Your appointment has been successfully confirmed.",
      badgeColor: "#16a34a",
      badgeBg: "#dcfce7",
      badgeLabel: "CONFIRMED",
      extra: "",
    },
  };

  const c = configs[status] || configs.confirmed;

  return wrap(`
${HEADER}
${heroBanner(c.line1, c.line2Gold, c.subtitle, c.body)}

<div style="padding:0 24px 28px;">
  <div style="background:#fff;border-radius:16px;box-shadow:0 4px 24px rgba(0,0,0,0.08);margin-top:-20px;position:relative;overflow:hidden;">
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td width="45%" style="padding:30px 24px 28px;border-right:1px solid #f0ede6;text-align:center;vertical-align:top;">
          <div style="width:52px;height:52px;background:#f5f0e8;border-radius:50%;margin:0 auto 14px;text-align:center;line-height:52px;font-size:22px;">📅</div>
          <div style="font-size:10px;font-weight:700;letter-spacing:3px;color:#c9a84c;margin-bottom:12px;font-family:Arial,sans-serif;">YOUR APPOINTMENT</div>
          <div style="font-size:19px;font-weight:700;color:#1a1a1a;font-family:Georgia,serif;line-height:1.3;">${formatDate(data.date)}</div>
          <div style="font-size:16px;color:#c9a84c;font-weight:600;margin-top:4px;font-family:Arial,sans-serif;">at ${data.time}</div>
          <div style="margin-top:16px;">
            <div style="display:inline-block;background:${c.badgeBg};color:${c.badgeColor};font-weight:700;font-size:12px;padding:8px 18px;border-radius:20px;letter-spacing:1px;font-family:Arial,sans-serif;">
              ✔ ${c.badgeLabel}
            </div>
          </div>
          ${c.extra}
        </td>
        <td width="55%" style="padding:30px 28px 28px;vertical-align:top;">
          <div style="font-size:10px;font-weight:700;letter-spacing:3px;color:#c9a84c;margin-bottom:14px;border-bottom:1px solid #c9a84c;padding-bottom:10px;font-family:Arial,sans-serif;">APPOINTMENT DETAILS</div>
          <table cellpadding="0" cellspacing="0">
            ${detailRow("✂️", "Service", data.category)}
            ${detailRow("👤", "Artist", data.artist)}
            ${detailRow("₹", "Amount", data.amount || "₹150")}
            ${detailRow("✔", "Status", c.badgeLabel, true)}
          </table>
        </td>
      </tr>
    </table>
  </div>
</div>

${FOOTER}
`);
};

// ═══════════════════════════════════════════════════════════════
//  5. BIRTHDAY
// ═══════════════════════════════════════════════════════════════
exports.birthdayTemplate = ({ name }) =>
  wrap(`
${HEADER}
${heroBanner("Happy", "Birthday! 🎂", `Hello ${name},`, "Wishing you a wonderful year filled with style, joy, and great hair days!")}

<div style="padding:0 24px 28px;">
  <div style="background:#fff;border-radius:16px;box-shadow:0 4px 24px rgba(0,0,0,0.08);margin-top:-20px;overflow:hidden;">
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td width="45%" style="padding:30px 24px 28px;border-right:1px solid #f0ede6;text-align:center;vertical-align:top;">
          <div style="font-size:52px;margin-bottom:12px;">🎉</div>
          <div style="font-size:10px;font-weight:700;letter-spacing:3px;color:#c9a84c;margin-bottom:10px;font-family:Arial,sans-serif;">SPECIAL OFFER</div>
          <div style="font-size:36px;font-weight:900;color:#c9a84c;font-family:Georgia,serif;">20%</div>
          <div style="font-size:13px;color:#555;font-family:Arial,sans-serif;">OFF on your birthday visit</div>
          <div style="margin-top:20px;">
            <a href="https://brownsalon.co.in"
               style="display:inline-block;background:#c9a84c;color:#fff;padding:11px 20px;border-radius:8px;text-decoration:none;font-size:12px;font-weight:700;letter-spacing:1px;font-family:Arial,sans-serif;">
              🎁&nbsp; BOOK NOW
            </a>
          </div>
        </td>
        <td width="55%" style="padding:30px 28px 28px;vertical-align:top;">
          <div style="font-size:10px;font-weight:700;letter-spacing:3px;color:#c9a84c;margin-bottom:14px;border-bottom:1px solid #c9a84c;padding-bottom:10px;font-family:Arial,sans-serif;">BIRTHDAY WISHES</div>
          <p style="font-size:14px;color:#444;line-height:1.7;font-family:Arial,sans-serif;margin:0 0 14px;">
            Dear <strong>${name}</strong>, on your special day, we want you to feel as fabulous as you are!
          </p>
          <p style="font-size:14px;color:#444;line-height:1.7;font-family:Arial,sans-serif;margin:0 0 14px;">
            Visit us this month and enjoy a special birthday treat on us. ✨
          </p>
          <div style="background:#f5f0e8;border-radius:10px;padding:14px;font-size:13px;color:#7a5c1e;font-family:Arial,sans-serif;">
            🎁 Mention this email to redeem your birthday discount.
          </div>
        </td>
      </tr>
    </table>
  </div>
</div>

${FOOTER}
`);

// ═══════════════════════════════════════════════════════════════
//  6. FESTIVAL WISH
// ═══════════════════════════════════════════════════════════════
exports.festivalTemplate = (data) =>
  wrap(`
${HEADER}
${heroBanner(`Happy`, `${data.name}! 🎊`, "Dear Valued Customer,", "May this festive season bring you joy, peace, and wonderful moments!")}

<div style="padding:0 24px 28px;">
  <div style="background:#fff;border-radius:16px;box-shadow:0 4px 24px rgba(0,0,0,0.08);margin-top:-20px;overflow:hidden;">
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td width="45%" style="padding:30px 24px 28px;border-right:1px solid #f0ede6;text-align:center;vertical-align:top;">
          <div style="font-size:52px;margin-bottom:12px;">🪔</div>
          <div style="font-size:10px;font-weight:700;letter-spacing:3px;color:#c9a84c;margin-bottom:10px;font-family:Arial,sans-serif;">FESTIVE OFFER</div>
          <div style="font-size:34px;font-weight:900;color:#c9a84c;font-family:Georgia,serif;">15%</div>
          <div style="font-size:13px;color:#555;font-family:Arial,sans-serif;">OFF all services this season</div>
          <div style="margin-top:20px;">
            <a href="https://brownsalon.co.in"
               style="display:inline-block;background:#c9a84c;color:#fff;padding:11px 20px;border-radius:8px;text-decoration:none;font-size:12px;font-weight:700;letter-spacing:1px;font-family:Arial,sans-serif;">
              ✨&nbsp; BOOK NOW
            </a>
          </div>
        </td>
        <td width="55%" style="padding:30px 28px 28px;vertical-align:top;">
          <div style="font-size:10px;font-weight:700;letter-spacing:3px;color:#c9a84c;margin-bottom:14px;border-bottom:1px solid #c9a84c;padding-bottom:10px;font-family:Arial,sans-serif;">FESTIVE MESSAGE</div>
          <p style="font-size:14px;color:#444;line-height:1.7;font-family:Arial,sans-serif;margin:0 0 14px;">
            ${data.message || `Wishing you and your family a very Happy ${data.name}!`}
          </p>
          <p style="font-size:14px;color:#444;line-height:1.7;font-family:Arial,sans-serif;margin:0 0 14px;">
            Celebrate this special occasion with style and confidence. 💇
          </p>
          <div style="background:#f5f0e8;border-radius:10px;padding:14px;font-size:13px;color:#7a5c1e;font-family:Arial,sans-serif;">
            ✨ Look your best this festive season — visit us today!
          </div>
        </td>
      </tr>
    </table>
  </div>
</div>

${FOOTER}
`);
