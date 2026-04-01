const express = require("express");
const router = express.Router();

const {
  getNotifications,
  clearNotifications,
  deleteNotifications,
} = require("../controllers/notification.controller");

const Notification = require("../models/Notification");

router.get("/", getNotifications);

router.put("/:id/read", async (req, res) => {
  await Notification.findByIdAndUpdate(req.params.id, { isRead: true });
  res.json({ success: true });
});

router.put("/clear", clearNotifications);
router.delete("/", clearNotifications);

router.delete("/:id", async (req, res) => {
  await Notification.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

module.exports = router;
