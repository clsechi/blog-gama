module.exports = function (app) {
	
	app.get('/', function (req, res) {
		res.render('index');
	});

	app.get('/about', function (req, res) {
		res.render('about');
	});

	app.post('/saveInfo', function (req, res) {
		var clientInfo = req.body;

		var ip = req.headers['x-real-ip'] || req.connection.remoteAddress;

		app.infra.connectionFactory(function (err, connection) {
			var blogDAO = new app.infra.BlogDAO(connection);


			connection.release();

		});

		console.log(clientInfo);

		console.log(req.ip);

		res.send('ok.');
	});
}