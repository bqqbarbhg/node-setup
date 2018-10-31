const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
	db.run('CREATE TABLE test (name TEXT)');
	db.run('INSERT INTO test VALUES ("Hello")');
	db.run('INSERT INTO test VALUES ("World")');
	db.each('SELECT * from test', (err, row) => {
		console.log(row);
	});
});

db.close()

