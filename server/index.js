const express = require('express');
const config = require('./config/config');

const app = express();
const cors = require('cors');
 
 app.use(cors());

//  if (!config.jwtPrivateKey) {
//     console.log("FATAL ERROR: jwtPrivateKey is not defined.");
//     process.exit(1);
//   }

require('./router/db')
require('./router/allRouter')(app);

const port = process.env.PORT || 4000;
app.listen( port, ()=> console.log(`listenig on ${port}...`));

// https://discordapp.com/oauth2/authorize?&client_id=686304906130489422&scope=bot&permissions=8