const bcrypt = require('bcrypt');

 const generateHashPassword = async(password) =>  {
    const genSalt = 10;
   const hashedPassword = await new Promise((resolve, reject) => {
        bcrypt.hash(password, genSalt, (err, hash) => {
          if (err) {
            log.error(`Error to generate Hashed password: ${err}`);
            reject(err);
          } else {
            resolve(hash);
          }
        });
      });
    
      return hashedPassword;
    };
    
    module.exports = generateHashPassword;

