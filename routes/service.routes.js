const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");

const {
  getServices,
  addService,
  updateService,
  deleteService,
} = require("../controllers/service.controller");

router.get("/", getServices);

router.post("/", upload.single("image"), addService);

router.put("/:id", upload.single("image"), updateService);

router.delete("/:id", deleteService);

module.exports = router;
