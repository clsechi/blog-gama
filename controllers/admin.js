module.exports = function (app) {
	
	app.get('/admin', function (req, res) {
		res.render('admin');
	});

	app.get('/infoLeads', function (req, res) {

		app.infra.connectionFactory(function (err, connection) {
			var blogDAO = new app.infra.BlogDAO(connection);

			blogDAO.countLeads(function (err, results) {
				if(err){
					return next(err);
				}

				res.json(results);

				connection.release();
			});
		});
	});
}	

	