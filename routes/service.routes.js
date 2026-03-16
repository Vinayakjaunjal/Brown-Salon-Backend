const express = require("express");
const router = express.Router();

const {
  getServices,
  addService,
  updateService,
  deleteService,
} = require("../controllers/service.controller");

router.get("/:id", async (req, res) => {
  const service = await Service.findById(req.params.id);
  res.json(service);
});

router.get("/", getServices);
router.post("/", addService);
router.put("/:id", updateService);
router.delete("/:id", deleteService);

module.exports = router;
