const express = require("express");
const router = express.Router();

const { createBooking } = require("../controllers/booking.controller");

router.get("/", (req, res) => {
  res.json({
    success: true,
    data: {
      _ID: "123",
      serviceName: "Haircut",
      date: "2026-03-18",
      time: "1:00 PM",
      status: "pending",
    },
  });
});

router.post("/", createBooking);

module.exports = router;
