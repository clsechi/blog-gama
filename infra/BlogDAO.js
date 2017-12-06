function BlogDAO(connection) {
	this._connection = connection;
}

BlogDAO.prototype.saveClientInfo = function(clientInfo, callback) {
	this._connection.query('INSERT INTO clients (name, email, ip, data) VALUES (?, ?, ?, ?);', [clientInfo.name, clientInfo.email, clientInfo.ip, clientInfo.time], callback);
};

BlogDAO.prototype.countLeads = function(callback) {
	this._connection.query('SELECT COUNT(email) AS leads FROM clients', callback);
}

BlogDAO.prototype.checkDuplicate = function(email, callback) {
	this._connection.query('SELECT COUNT(email) AS quant FROM clients WHERE email = ? ;', [email], callback);
};

module.exports = function(){
	return BlogDAO;
}