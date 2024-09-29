const express = require("express");
const {
  getAllAttractions,
  createAttraction,
  getUniqueValues,
} = require("../controllers/attractionController");

const router = express.Router();

router.get("/", getAllAttractions);

router.post("/create", createAttraction);

router.get("/unique/:field", getUniqueValues);


module.exports = router;
