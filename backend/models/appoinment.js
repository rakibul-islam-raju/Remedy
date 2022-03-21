const mongoose = require("mongoose");

const appoinmentSchema = mongoose.Schema(
	{
		fullName: { type: String, require: true },
		email: { type: String, require: true },
		phone: { type: String, require: true },
		age: { type: Number, require: true },
		sex: { type: String, require: true },
		date: { type: Date, require: true },
		description: { type: Date, require: true },
		doctor: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" },
		isApproved: { type: Boolean, default: false },
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Appoinemnt", appoinmentSchema);
