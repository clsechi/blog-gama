var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

module.exports = function (){

	var app = express();

	app.use(express.static('./public')); //rota pra o css e js

	app.set('view engine', 'ejs');
	app.set('views', './views');

	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());

	app.use(expressValidator());

	app.enable('trust proxy');

	consign()
    	.include('./controllers')
    	.then('./infra')
    	.into(app);

	return app;
}