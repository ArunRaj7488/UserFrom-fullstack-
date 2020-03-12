 const User = require('../Models/User');
 const config = require('config');
const jwt = require('jsonwebtoken');

 module.exports.addUser = async(req, res) => {

 	try {
		 const userName = await User.findOne({ userName : req.body.userName});
		 if(userName) return res.status(400).send({ message:'user already exist'});
 		
 		const user = await new User(req.body)
		 await user.save();
		 
			 const token= jwt.sign({_id:user._id,username: user.userName, email: user.email},"asd123asd");
			res.header('x-auth-token', token).send({user: ['id', 'userName', 'email']});
 			res.send(token);

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
		let user = await User.findOne({email:req.body.email})
		if(!user) return res.status(400).send('Invalid email.... ');
	
		if(user.password != req.body.password) return res.status(404).send({status: false, error: 'Invalid password...'});
	
		res.send({status: true, message:"You have login successesfully...", result:req.body})
	

	 } catch(err) {
		return res.status(500).send( { error: err });

	 }

 };

 



