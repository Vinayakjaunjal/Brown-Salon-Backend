const express = require("express");
const router = express.Router();

const {
  getNotifications,
  clearNotifications,
  deleteNotifications,
} = require("../controllers/notification.controller");

router.get("/", getNotifications);
router.put("/clear", clearNotifications);
router.delete("/", deleteNotifications);

module.exports = router;
