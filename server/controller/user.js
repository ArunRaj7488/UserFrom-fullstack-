 const User = require('../Models/User');

 module.exports.addUser = async(req, res) => {

 	try {
 			console.log('ass',req.body)
		 const userName = await User.findOne({ userName : req.body.userName});
		 if(userName) return res.status(400).send({ message:'user already exist'});
 		
 		const user = await new User(req.body)
 		await user.save();
 		res.send({ result: user})

 	} catch (err) {
 		res.status(500).send( { error: err });
 	}
 };

 module.exports.getUser = async (req, res) => {
 	try {
 		const user = await User.find();
 		console.log(res);
 		res.status(200).send( { count: user.length, result: user });


 	} catch (err) {
 		res.status(500).send( { error: err });
 	}

 };

 



