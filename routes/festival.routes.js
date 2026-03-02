const router = require("express").Router();

const {
  createFestival,
  getFestivals,
  sendWish,
} = require("../controllers/festival.controller");

router.post("/", createFestival);
router.get("/", getFestivals);
router.post("/send/:id", sendWish);

module.exports = router;
