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
				_id: existingUser._id,
				email: existingUser.email,
				isAdmin: existingUser.isAdmin,
			},
			process.env.jwt_secret_key,
			{ expiresIn: "1h" }
		);

		res.status(200).json({ result: existingUser, token });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const register = async (req, res) => {
	const { fullName, email, password } = req.body;

	try {
		const existingUser = await User.findOne({ email });
		if (existingUser)
			return res.status(404).json({ message: "User already exist!" });

		const hashedPassword = await bcrypt.hash(password, 12);

		const result = await User.create({
			fullName,
			email,
			password: hashedPassword,
		});

		const token = jwt.sign(
			{
				_id: result._id,
				email: result.email,
				isAdmin: result.isAdmin,
			},
			process.env.jwt_secret_key,
			{ expiresIn: "1h" }
		);

		res.status(200).json({ result, token });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

module.exports = {
	login,
	register,
};
