 const User = require('../Models/User');
 const config = require('../config/config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const generateHashPassword = require('../config/hashpassword');

 module.exports.addUser = async(req, res) => {

 	try {
		 
		 const user_Name = await User.findOne({ userName : req.body.userName});
		 if(user_Name) return res.status(400).send({ message:'user already exist'});

		 const user_email = await User.findOne({ email : req.body.email});
		 if(user_email) return res.status(400).send({ message:'email already exist'});

		 const {
			userName, password, firstName,
            lastName, email, phoneNumber, address, gender
		 } = req.body;
 		
 		const user = await new User({
			userName, 
			password: await generateHashPassword(password),
			firstName,
			lastName, 
			email, 
			phoneNumber, 
			address, 
			gender
		 })
		 await user.save();

			const token= jwt.sign({_id:user._id,email: user.email, password: user.password},config.jwtPrivateKey);
			res.header('x-auth-token', token).send(user);

 	} catch (err) {
 		res.status(500).send( { error: err });
 	}
 };

 module.exports.getUser = async (req, res) => {
 	try {
 		const user = await User.find();
 		console.log('userdata',res);
 		res.status(200).send( { count: user.length, result: user });


 	} catch (err) {
 		return res.status(500).send( { error: err });
 	}

 };

 module.exports.login = async (req, res) => {
	 try{

		console.log('zxcvbnxmzn')
		let user = await User.findOne({email:req.body.email});
		if(!user) return res.status(400).send('Invalid email');
	

		const passwordCheck = await bcrypt.compare(req.body.password, user.password);
		if(!passwordCheck) return res.status(404).send({status: false, error: 'Invalid password...'});
	
		res.send({status: true, message:"You have login successesfully...", result:req.body})
	

	 } catch(err) {
		return res.status(500).send( { error: err });

	 }

 };

 



