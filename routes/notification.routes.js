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
router.delete("/", deleteNotifications);

module.exports = router;
