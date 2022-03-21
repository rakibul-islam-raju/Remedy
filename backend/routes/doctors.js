const express = require("express");

const auth = require("../middleware/auth");

const {
	createDoctor,
	listDoctor,
	detailDoctor,
	updateDoctor,
	deleteDoctor,
} = require("../controller/doctor");

const router = express.Router();

router.post("/", createDoctor);
router.get("/", auth, listDoctor);
router.get("/:id", detailDoctor);
router.patch("/:id", updateDoctor);
router.delete("/:id", deleteDoctor);

module.exports = router;
