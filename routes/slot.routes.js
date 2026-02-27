const express = require("express");
const router = express.Router();

const { blockSlot, unblockSlot } = require("../controllers/slot.controller");

router.post("/block", blockSlot);
router.post("/unblock", unblockSlot);

const { getSlots, saveSlots } = require("../controllers/slot.controller");

const { getAvailableSlots } = require("../controllers/slot.controller");

router.get("/available", getAvailableSlots);

router.get("/", getSlots);
router.post("/", saveSlots);

module.exports = router;
