const app = require('./app'); //Bring in app
const dotenv = require('dotenv');
const mongoose = require('mongoose');

//import enviroment variables from file
dotenv.config({ path: 'environment-variables.env' });

//Connect to db and handle errors
mongoose.connect(process.env.DATABASE);
mongoose.connection.on('error', (err) => {
  console.error(`${err.message}`);
});

// Set port and start app
app.set('port', process.env.PORT);
app.listen(app.get('port'), () => {
    console.log(`Express running -> PORT ${app.get('port')}`);
});