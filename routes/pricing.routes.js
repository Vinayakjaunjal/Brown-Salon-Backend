const express = require("express");
const router = express.Router();

const {
  getPricing,
  addPricing,
  updatePricing,
  deletePricing,
} = require("../controllers/pricing.controller");

router.get("/", getPricing);
router.post("/", addPricing);
router.put("/:id", updatePricing);
router.delete("/:id", deletePricing);

module.exports = router;
