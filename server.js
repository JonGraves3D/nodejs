var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	meetupsController = require('./server/controllers/meetups-controller');

	mongoose.connect('mongodb://jon:chthuluRox420+@ds057254.mongolab.com:57254/data')

	app.use(bodyParser());

	//Homepage

	app.get('/', function(req, res){
		res.sendfile(__dirname + 'client/views/index.html');
	});

	//REST API
	app.get('/api/meetups', meetupsController.list);
	app.post('/api/meetups', meetupsController.create);

	app.listen(3000, function(){
		console.log('Im Listening...');
	});
