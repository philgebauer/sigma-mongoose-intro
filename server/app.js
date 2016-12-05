var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var index = require('./routes/index');
var people = require('./routes/people');
var mongoose = require ('mongoose')

app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.json());

app.use('/person', people)
app.use('/', index);

var databaseUri = 'mongodb://localhost:27017/sigma';
mongoose.connect(databaseUri);

mongoose.connection.on('connected', function() {
  console.log('mongoose connected to ', databaseUri);
});

mongoose.connection.on('error', function(err) {
  console.log('mongoose connection error: ', err);
});




app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});
