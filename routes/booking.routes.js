const express = require("express");
const router = express.Router();

const {
  createBooking,
  getBookings,
  getAllBookings,
  updateBookingStatus,
} = require("../controllers/booking.controller");

router.post("/", createBooking);
router.get("/", getBookings);

router.get("/all", getAllBookings);
router.patch("/:id/status", updateBookingStatus);

module.exports = router;
