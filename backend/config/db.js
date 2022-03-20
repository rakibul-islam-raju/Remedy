require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
	const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.dafwp.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

	try {
		await mongoose.connect(uri, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		console.log("mongoDB connected");
	} catch (error) {
		console.log("mongoDB connection failes");
		process.exit(1);
	}
};

module.exports = connectDB;
