const express = require("express");
const router = express.Router();

const {
  addCustomer,
  getCustomers,
  deleteCustomer,
  sendWish,
} = require("../controllers/birthday.controller");

router.post("/", addCustomer);
router.get("/", getCustomers);
router.delete("/:id", deleteCustomer);
router.post("/wish", sendWish);

module.exports = router;
