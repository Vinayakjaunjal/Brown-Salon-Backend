const LOGO_URL =
  "https://res.cloudinary.com/dsjypyora/image/upload/v1769510490/brown-circle-logo_bm8nhy.png";

// COMMON HEADER

const HEADER = `

<div style="background:#F4F7FA; 
padding:32px 25px 24px;
text-align:center;
border-bottom:1px solid #E5E7EB;">

<img
src="${LOGO_URL}"
alt="Brown Hair The Unisex Salon"
style="width:72px;
height:72px;
object-fit:contain;
margin-bottom:14px;"/>


<p style="margin:0;
font-size:14px;
font-weight:400;
color:#9CA3AF;
letter-spacing:.5px;">

Style • Groom • Shine

</p>



<h1 style="margin:10px 0 4px;
font-size:28px;
font-weight:600;
line-height:1.3;
color:#2D2D2D;">

Brown Hair The Unisex Salon

</h1>


<p style="margin:0;
font-size:14px;
font-weight:400;
color:#6B7280;">

Nagpur

</p>

</div>

`;

// COMMON FOOTER

const FOOTER = `
<div style="padding:30px 25px;
background:#ffffff;
border-top:1px solid #E5E7EB;">


<div style="

text-align:center;

margin-bottom:22px;">


<span style="display:inline-block;
margin:0 20px;">

<p style="margin:0;
font-size:12px;
font-weight:600;
letter-spacing:1px;
color:#9CA3AF;">

CALL US

</p>


<p style="margin-top:6px;
font-size:14px;
color:#374151;">

+91 9623345713

</p>

</span>




<span style="
display:inline-block;
margin:0 20px;
">

<p style="margin:0;
font-size:12px;
font-weight:600;
letter-spacing:1px;
color:#9CA3AF;">

EMAIL US

</p>


<p style="margin-top:6px;
font-size:14px;
color:#374151;">

info@brownhairsalon.com

</p>

</span>




<span style="
display:inline-block;
margin:0 20px;
">

<p style="
margin:0;
font-size:12px;
font-weight:600;
letter-spacing:1px;
color:#9CA3AF;
">

OPENING HOURS

</p>


<p style="
margin-top:6px;
font-size:14px;
color:#374151;
">

10:00 AM – 9:00 PM

</p>

</span>


</div>




<div style="
text-align:center;
padding-top:18px;
border-top:1px solid #F3F4F6;
">


<p style="
margin:0;
font-size:14px;
color:#4B5563;
">

Thank you for choosing


<strong>

Brown Hair The Unisex Salon

</strong>


</p>



<p style="
margin-top:8px;
font-size:12px;
line-height:1.7;
color:#9CA3AF;
">

Krida Square, Nagpur


<br>


We look forward to welcoming you again.


</p>



<p style="
margin-top:18px;
font-size:11px;
color:#C0C4CC;
">

This is an automated message from
Brown Hair The Unisex Salon.
Please do not reply to this email.
</p>
</div>
</div>
`;

// CUSTOMER APPOINTMENT CONFIRMATION

exports.customerConfirmedTemplate = (data) => `

<!DOCTYPE html>
<html>

<body style="
margin:0;
padding:25px;
background:#F6F7FB;
font-family:Arial,sans-serif;
">

<div style="
max-width:700px;
margin:auto;
background:#ffffff;
border-radius:30px;
overflow:hidden;
box-shadow:0 6px 20px rgba(0,0,0,.04);
">


${HEADER}



<!-- HERO -->


<div style="

padding:40px;

background:#EEF4FF;

">


<h1 style="

margin:0;

font-size:52px;

font-weight:300;

line-height:1.1;

color:#2F3A4A;

">

Appointment


<br>


<span style="

color:#7C9DFF;

font-weight:600;

">

Confirmed

</span>


</h1>



<p style="

margin-top:30px;

font-size:16px;

line-height:1.8;

color:#4B5563;

">

Hello


<strong>

${data.name}

</strong>,



<br><br>


Your appointment has been successfully scheduled.



<br>


We look forward to welcoming you at


<strong>

Brown Hair The Unisex Salon,
Nagpur


</strong>.



</p>



</div>






<!-- FLOATING CARD -->


<div style="

padding:0 30px;

margin-top:-35px;

">


<div style="

background:white;

border-radius:28px;

padding:35px;

box-shadow:0 6px 20px rgba(0,0,0,.05);

border:1px solid #EDF1F5;

">


<table width="100%">


<tr>



<td width="45%"

align="center"

valign="top"

>


<p style="

font-size:13px;

letter-spacing:1px;

color:#9CA3AF;

">

YOUR APPOINTMENT


</p>




<h2 style="

font-size:34px;

font-weight:500;

color:#2F3A4A;

margin-top:25px;

">

${data.date}

</h2>




<p style="

font-size:24px;

margin-top:15px;

color:#7C9DFF;

">

${data.time}

</p>





<a href="#"

style="

display:inline-block;

padding:14px 28px;

margin-top:25px;

border-radius:30px;

background:#7C9DFF;

text-decoration:none;

color:white;

font-size:14px;

">

ADD TO CALENDAR


</a>




</td>






<td width="10%"></td>






<td width="45%"


valign="top"


>



<p style="

font-size:13px;

letter-spacing:1px;

color:#9CA3AF;

">

APPOINTMENT DETAILS


</p>





<p style="

margin-top:25px;

font-size:16px;

color:#4B5563;

">

✂ Service



<span style="float:right;">


${data.category}


</span>


</p>





<p style="

margin-top:25px;

font-size:16px;

color:#4B5563;

">

👨 Artist



<span style="float:right;">


${data.artist}


</span>


</p>





<p style="

margin-top:25px;

font-size:16px;

color:#4B5563;

">

🟢 Status



<span style="

float:right;

background:#ECFDF3;

padding:7px 14px;

border-radius:50px;

color:#16A34A;

font-size:13px;

font-weight:600;

">

CONFIRMED


</span>


</p>



</td>



</tr>


</table>



</div>


</div>






<!-- REMINDER -->


<div style="

padding:30px;

">


<div style="

background:#F9FAFB;

border:1px solid #EEF2F7;

padding:22px;

border-radius:18px;

">


<table width="100%">


<tr>



<td width="50%">


<p style="

margin:0;

font-size:15px;

color:#4B5563;

">

🔔 Please arrive


10 minutes before your appointment.


</p>



</td>





<td width="50%">


<p style="

margin:0;

font-size:15px;

line-height:1.7;

color:#6B7280;

">


Need to reschedule or cancel?



<br>



Please contact us as soon as possible.


</p>



</td>



</tr>



</table>




</div>



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
    <p><b>Artist:</b> ${data.artist}</p>
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
          <td><b>Artist</b></td>
          <td>${data.artist}</td>
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
<body style="margin:0;background:#f4f6f8;font-family:Poppins,Arial;">

<div style="max-width:600px;margin:30px auto;background:#fff;border-radius:16px;overflow:hidden;border:1px solid #eee;">

  ${HEADER}

  <div style="padding:25px;">

    <!-- TITLE -->
    <h2 style="text-align:center;color:#2563eb;margin-bottom:5px;">
      ⏰ Appointment Reminder
    </h2>

    <p style="text-align:center;color:#6b7280;font-size:13px;margin-bottom:20px;">
      Your appointment is coming up soon
    </p>

    <!-- GREETING -->
    <p style="font-size:14px;">Hello <b>${data.name}</b>,</p>

    <p style="font-size:14px;color:#374151;">
      This is a quick reminder for your upcoming appointment at 
      <b>Brown Hair Salon</b>.
    </p>

    <!-- CARD -->
    <div style="background:#f9fafb;padding:18px;border-radius:12px;border:1px solid #eee;margin:20px 0;">

      <p style="margin:6px 0;font-size:14px;">
        <b>💇 Service:</b> ${data.category || data.serviceName}
      </p>

      <p style="margin:6px 0;font-size:14px;">
        <b>📅 Date:</b> ${data.date}
      </p>

      <p style="margin:6px 0;font-size:14px;">
        <b>⏱ Time:</b> ${data.time}
      </p>

    </div>

    <!-- INFO BOX -->
    <div style="background:#ecfdf5;padding:12px;border-radius:10px;font-size:13px;color:#065f46;">
      ✔ Please arrive <b>10 minutes early</b> for a smooth experience.
    </div>

    <!-- CTA -->
    <div style="text-align:center;margin-top:20px;">
      <a href="https://brownsalon.co.in/profile"
         style="display:inline-block;background:#facc15;color:#000;padding:10px 18px;border-radius:8px;font-size:14px;text-decoration:none;font-weight:600;">
         View Booking
      </a>
    </div>

    <!-- FOOT NOTE -->
    <p style="margin-top:25px;font-size:13px;color:#6b7280;">
      If you need to reschedule, please contact us in advance.
    </p>

    <p style="margin-top:20px;font-size:14px;">
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

// ======== FESTIVAL EMAIL ======== //

exports.festivalTemplate = (data) => `
<!DOCTYPE html>
<html>
<body style="margin:0;background:#f4f6f8;font-family:Arial;">

<div style="max-width:600px;margin:30px auto;background:#fff;border-radius:12px;overflow:hidden;">

  ${HEADER}

  <div style="padding:25px;">

    <h2 style="text-align:center;color:#d4af37;">
      🎉 ${data.name} Wishes 🎉
    </h2>

    <p>Hello,</p>

    <p style="font-size:15px;line-height:1.6;">
      ${data.message}
    </p>

    <div style="background:#f9fafb;padding:15px;border-radius:10px;margin-top:15px;">
      <p style="margin:0;">
        ✨ Celebrate this special occasion with style and confidence.
      </p>
      <p style="margin-top:8px;">
        💇 Visit us and enjoy our premium salon services.
      </p>
    </div>

    <p style="margin-top:20px;">
      We look forward to welcoming you soon.
    </p>

    <p style="margin-top:20px;">
      Warm wishes,<br/>
      <b>Brown Hair – The Unisex Salon</b>
    </p>

  </div>

  ${FOOTER}

</div>

</body>
</html>
`;
