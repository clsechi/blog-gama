module.exports = function (app) {
	
	app.get('/', function (req, res) {
		res.render('index');
	});

	app.post('/saveInfo', function (req, res) {
		var clientInfo = req.body;

		app.infra.connectionFactory(function (err, connection) {
			var blogDAO = new app.infra.BlogDAO(connection);


			connection.release();

		});

		console.log(clientInfo);

		res.send('ok.');
	});
}