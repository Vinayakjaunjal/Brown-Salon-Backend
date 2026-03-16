const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const Service = require("../models/Service");

const {
  getServices,
  addService,
  updateService,
  deleteService,
} = require("../controllers/service.controller");

router.get("/", getServices);

router.get("/:id", async (req, res) => {
  const service = await Service.findById(req.params.id);
  res.json(service);
});

router.post("/", upload.single("image"), addService);

router.put("/:id", upload.single("image"), updateService);

router.delete("/:id", deleteService);

module.exports = router;
