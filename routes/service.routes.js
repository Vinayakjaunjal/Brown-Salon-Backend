const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const Service = require("../models/Service"); // 👈 IMPORTANT

const {
  getServices,
  addService,
  updateService,
  deleteService,
} = require("../controllers/service.controller");

router.get("/", getServices);

// 👇 ADD THIS
router.get("/:id", async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);

    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    res.json(service);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", upload.single("image"), addService);
router.put("/:id", upload.single("image"), updateService);
router.delete("/:id", deleteService);

module.exports = router;
