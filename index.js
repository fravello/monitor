const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();

app.set('port', process.env.PORT || 3000);

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', function (req, res) {
    res.sendFile('index.html', {root: __dirname});
});

app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'));
});