const express = require("express");
const router = express.Router();

const { getSlots, saveSlots } = require("../controllers/slot.controller");

router.get("/", getSlots);
router.post("/", saveSlots);

module.exports = router;
