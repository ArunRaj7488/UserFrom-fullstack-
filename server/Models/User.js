 const mongoose = require('mongoose');
 const config = require('config');
const jwt = require('jsonwebtoken');
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

userSchema.method.generateAuthToken = function(){
	const token = jwt.sign()
}

const User = mongoose.model("User", userSchema);

module.exports = User;