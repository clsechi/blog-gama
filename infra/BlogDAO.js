function BlogDAO(connection) {
	this._connection = connection;
}

BlogDAO.prototype.saveClientInfo = function(clientInfo, callback) {
	this._connection.query('INSERT INTO clients (name, email, ip, data) VALUES (?, ?, ?, now());', [clientInfo.name, clientInfo.email, clientInfo.ip], callback);

};

module.exports = function(){
	return BlogDAO;
}

