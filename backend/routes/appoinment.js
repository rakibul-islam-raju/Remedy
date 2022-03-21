const express = require("express");

const auth = require("../middleware/auth");

const {
	createAppoinment,
	listAppoinment,
	detailAppoinment,
	updateAppoinment,
	deleteAppoinment,
} = require("../controller/appoinment");

const router = express.Router();

router.post("/", auth, createAppoinment);
router.get("/", auth, listAppoinment);
router.get("/:id", auth, detailAppoinment);
router.patch("/:id", auth, updateAppoinment);
router.delete("/:id", auth, deleteAppoinment);

module.exports = router;
