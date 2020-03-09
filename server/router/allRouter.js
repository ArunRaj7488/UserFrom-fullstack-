const express = require('express');
const app = express();

const user = require('./user');


module.exports = (app) => {

	app.use(express.json());
	
	app.use('/api/v1', user)
};