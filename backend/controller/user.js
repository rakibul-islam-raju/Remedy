const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

const login = async (req, res) => {
	const { email, password } = req.body;

	try {
		const existingUser = await User.findOne({ email });
		if (!existingUser)
			return res.status(404).json({ message: "User doesn't exist!" });

		const isPassCorrect = await bcrypt.compare(
			password,
			existingUser.password
		);
		if (!isPassCorrect)
			return res.status(404).json({ message: "Invalid credentials!" });

		const token = jwt.sign(
			{
				email: existingUser.email,
				id: existingUser._id,
			},
			process.env.jwt_secret_key,
			{ expiresIn: "1h" }
		);

		res.status(200).json({ result: existingUser, token });
	} catch (error) {
		res.status(500).json({ message: "Something went wrong!" });
	}
};

const register = async (req, res) => {
	const { fullName, email, password } = req.body;

	try {
		const existingUser = await User.findOne({ email });
		if (existingUser)
			return res.status(404).json({ message: "User already exist!" });

		const hashedPass = bcrypt.hash(password, 12);

		const result = await User.create({ fullName, email, hashedPass });

		const token = jwt.sign(
			{
				email: result.email,
				id: result._id,
			},
			process.env.jwt_secret_key,
			{ expiresIn: "1h" }
		);

		res.status(200).json({ result, token });
	} catch (error) {
		res.status(500).json({ message: "Something went wrong!" });
	}
};

module.exports = {
	login,
	register,
};
