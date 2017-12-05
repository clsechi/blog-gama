module.exports = function (app) {
	
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

			blogDAO.saveClientInfo(clientInfo, function (err, results) {
				if(err){
					return next(err);
				}

				res.download('files/file.pdf');

				connection.release();
			});
		});
	});
}