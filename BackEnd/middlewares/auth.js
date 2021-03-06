const jwt = require("jsonwebtoken");

function check_auth(req, res, next) {
	try {
		const token = req.headers["x-auth-token"];
		console.log("checked token");
		if (!token) {
			res.status(401).json({ message: "Access Denied. No token" });
		}
		try {
			console.log(token);
			const decoded = jwt.verify(token, process.env.JWT_KEY);

			req.user = decoded;
			 console.log(req.user);
			next();
		} catch (error) {
			return res.status(401).json("Auth Failed1");
		}
	} catch {
		return res.status(401).json("Auth Failed");
	}
}

module.exports = check_auth;
