const mongoose = require('mongoose');

module.exports = mongoose.connect('mongodb://localhost:27017/uesr')
	.then(() => console.log('connected to mongodb'))
	.catch(() => console.log('Not connected to mongodb'));