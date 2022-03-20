const jwt = require("jsonwebtoken");

const adminAuth = (req, res, next) => {
	try {
		const token = req.headers.authorization.split(" ")[1];
		const isCustomAuth = token.length < 500;

		let decodedData;

		if (token && isCustomAuth) {
			decodedData = jwt.verify(token, process.env.jwt_secret_key);
			req.userId = decodedData?.id;
		}

		next();
	} catch (error) {
		console.log("error =>", error);
	}
};
