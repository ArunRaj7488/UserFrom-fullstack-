 const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	userName: { 
		type: String,
		required: true 
	},

	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	phoneNumber: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	address: {
	 type: String,
	},
	gender: String
});

const User = mongoose.model("User", userSchema);

module.exports = User;