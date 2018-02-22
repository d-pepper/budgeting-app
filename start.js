const app = require('./app'); //Bring in app

// Set port and start app
app.set('port', 8888);
app.listen(app.get('port'), () => {
    console.log(`Express running -> PORT ${app.get('port')}`);
});