const mongoose = require("mongoose");

const doctorSchema = mongoose.Schema(
	{
		fullName: { type: String, require: true },
		designation: { type: String, require: true },
		description: { type: String, require: true },
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Doctor", doctorSchema);
