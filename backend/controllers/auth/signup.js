const bcrypt = require("bcryptjs");
const db = require("../../utils/configDB");
const asyncWrapper = require("../../middlewares/asyncWrapper");
const CustomError = require("../../models/CustomError");

const signup = asyncWrapper(async (req, res, next) => {
	const { email, password } = req.body;

	if (!email || !password) return next(new CustomError("Bad request", 400));

	const hashedPassword = await bcrypt.hash(password, 10);

	const sql = "INSERT INTO users (email, password) VALUES (?, ?)";
	db.run(sql, [email, hashedPassword], (error) => {
		if (error) return next(new CustomError("User not created", 403));
		else return res.status(201).json({ message: "User created with success." });
	});
});

module.exports = signup;
