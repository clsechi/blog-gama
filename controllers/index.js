module.exports = function (app) {

	//portuguese
	
	app.get('/', function (req, res) {
		res.render('index');
	});

	app.get('/about', function (req, res) {
		res.render('about');
	});

	app.get('/articles/:id', function (req, res){
		var id = req.params.id;

		res.render('articles/' + id);
	});

	//english

	app.get('/en', function (req, res) {
		res.render('en/index');
	});

	app.get('/en/about', function (req, res) {
		res.render('en/about');
	});

	app.get('/en/articles/:id', function(req, res){
		var id = req.params.id;

		res.render('en/articles/' + id);
	});

	//post function

	app.post('/saveInfo', function (req, res, next) {

		req.assert("name", "Nome é obrigatório").notEmpty();
		req.assert("email", "Email é obrigatório").notEmpty();

		var errs = req.validationErrors();

	    if (errs){
	      console.log('Erros de validacao encontrados');
	      res.status(400).send(errs);
	      return;
	    }

		var clientInfo = req.body;

		clientInfo.ip = req.ip;

		clientInfo.time = new Date().toString();

		app.infra.connectionFactory(function (err, connection) {
			var blogDAO = new app.infra.BlogDAO(connection);

			blogDAO.checkDuplicate(clientInfo.email, function (err, results) {
				if(err){
						return next(err);
				}

				if(results[0].quant == 0){
					blogDAO.saveClientInfo(clientInfo, function (err, results) {
						if(err){
							return next(err);
						}

						res.download('files/file.pdf');

						connection.release();
					});
				} else {
					//email duplicado
					console.log("Email duplicado detectado " + clientInfo.email);

					res.download('files/file.pdf');

					connection.release();
				}

				
			});			
		});
	});
}