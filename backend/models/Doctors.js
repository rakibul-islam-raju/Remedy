const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	author: {
		type: String,
		required: true,
	},
	photoUrl: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		required: true,
	},
	publishedDate: {
		type: Date,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	is_published: {
		type: Boolean,
		default: false,
	},
});

const News = mongoose.model("doctor", doctorSchema);

module.exports = News;
