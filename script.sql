CREATE TABLE clients (
	clientID INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(30) NOT NULL,
	email VARCHAR(50) NOT NULL,
	ip VARCHAR(20) NOT NULL,
	data DATETIME NOT NULL,
	PRIMARY KEY (clientID)
);

INSERT INTO clients (name, email, ip, data) VALUES ('Carlos','carlossechi@hotmail.com', '192.168.0.1', now());

mysql -h us-cdbr-iron-east-05.cleardb.net -u b69f8c0a476220 -p