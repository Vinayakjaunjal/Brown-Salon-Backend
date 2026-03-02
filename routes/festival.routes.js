const express = require("express");
const router = express.Router();

const {
  getFestivals,
  addFestival,
  deleteFestival,
  sendFestivalWish,
} = require("../controllers/festival.controller");

router.get("/", getFestivals);
router.post("/", addFestival);
router.delete("/:id", deleteFestival);
router.post("/send/:id", sendFestivalWish);

module.exports = router;
