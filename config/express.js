var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');

module.exports = function (){

	var app = express();

	app.use(express.static('./public')); //rota pra o css e js

	app.set('view engine', 'ejs');
	app.set('views', './views');

	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());

	consign()
    	.include('./controllers')
    	.then('./infra')
    	.into(app);

	return app;
}