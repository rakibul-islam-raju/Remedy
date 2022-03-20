const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
	{
		fullName: { type: String, require: true },
		email: { type: String, require: true },
		password: { type: String, require: true },
		isAdmin: { type: Boolean, default: false },
		id: { type: String },
	},
	{ timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
