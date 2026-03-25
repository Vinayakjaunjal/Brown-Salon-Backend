const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./utils/reminderCron");

const connectDB = require("./db");

// ROUTES
const adminRoutes = require("./routes/admin.routes");
const slotRoutes = require("./routes/slot.routes");
const birthdayRoutes = require("./routes/birthday.routes");
const serviceRoutes = require("./routes/service.routes");
const galleryRoutes = require("./routes/gallery.routes");
const reviewRoutes = require("./routes/review.routes");
const notificationRoutes = require("./routes/notification.routes");
const festivalRoutes = require("./routes/festival.routes");
const bookingRoutes = require("./routes/booking.routes");
const authRoutes = require("./routes/auth.routes");
const customerRoutes = require("./routes/customer.routes");

const errorHandler = require("./middleware/errorHandler");

const app = express();
const path = require("path");

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/admin", adminRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/slots", slotRoutes);
app.use("/api/birthdays", birthdayRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/festivals", festivalRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/user", require("./routes/user.routes"));

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

// START SERVER AFTER DB CONNECT
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Backend running on port ${PORT}`);
  });
});
