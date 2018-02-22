const app = require('./app'); //Bring in app

app.set('port', 8888);
app.listen(app.get('port'), () => {
    console.log(`Express running -> PORT ${app.get('port')}`);
});