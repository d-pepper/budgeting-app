const app = require('./app'); //Bring in app
const dotenv = require('dotenv');

//import enviroment variables from file
dotenv.config({ path: 'environment-variables.env' });

// Set port and start app
app.set('port', process.env.PORT);
app.listen(app.get('port'), () => {
    console.log(`Express running -> PORT ${app.get('port')}`);
});