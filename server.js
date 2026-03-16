const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./utils/reminderCron");

const connectDB = require("./db");

// ROUTES
const adminRoutes = require("./routes/admin.routes");
const appointmentRoutes = require("./routes/appointment.routes");
const slotRoutes = require("./routes/slot.routes");
const birthdayRoutes = require("./routes/birthday.routes");
const serviceRoutes = require("./routes/service.routes");
const galleryRoutes = require("./routes/gallery.routes");
const reviewRoutes = require("./routes/review.routes");
const notificationRoutes = require("./routes/notification.routes");
const festivalRoutes = require("./routes/festival.routes");

// ERROR HANDLER (optional but recommended)
const errorHandler = require("./middleware/errorHandler");

const app = express();

// MIDDLEWARE
app.use(cors());

app.use(express.json());
app.use("/uploads", express.static("uploads"));

// DB
connectDB();

// ROUTE MOUNTS (PATHS SAME AS BEFORE)
app.use("/api/admin", adminRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/slots", slotRoutes);
app.use("/api/birthdays", birthdayRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/festivals", festivalRoutes);

// TEST
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// ERROR HANDLER (LAST)
app.use(errorHandler);

// START SERVER
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Backend running on port ${PORT}`);
});
