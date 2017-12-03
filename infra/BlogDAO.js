function BlogDAO(connection) {
	this._connection = connection;
}

BlogDAO.prototype.saveClientInfo = function(clientInfo) {
	this._connection.query('INSERT INTO client SET ?', clientInfo, callback);
};

module.exports = function(){
	return BlogDAO;
}

