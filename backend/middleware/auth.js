const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
	try {
		if (!req.headers.authorization) {
			return res.status(400).json({ message: "Unauthorized" });
		}

		const token = req.headers.authorization.split(" ")[1];
		const isCustomAuth = token.length < 500;

		let decodedData;

		if (token && isCustomAuth) {
			decodedData = jwt.verify(token, process.env.jwt_secret_key);
			const isAdmin = jwt.decode(token).isAdmin;
			req.userId = decodedData?._id;
			req.isAdmin = isAdmin;
		} else {
			decodedData = jwt.decode(token);
			req.userId = decodedData?.sub;
		}

		next();
	} catch (error) {
		console.log("error =>", error);
	}
};

module.exports = auth;
