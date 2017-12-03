function BlogDAO(connection) {
	this._connection = connection;
}

module.exports = function(){
	return BlogDAO;
}