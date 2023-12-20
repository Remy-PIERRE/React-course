const db = require("./configDB");

const initDB = () => {
	// dropTables(db);
	createTables(db);
};

const dropTables = (db) => {
	db.run("DROP TABLE if exists users");
	db.run("DROP TABLE if exists projects");
};

const createTables = (db) => {
	const sqlUsers =
		"CREATE TABLE if not exists users (id INTEGER PRIMARY KEY AUTOINCREMENT, email UNIQUE, password)";
	db.run(sqlUsers);

	const sqlProjects =
		"CREATE TABLE if not exists projects (id INTEGER PRIMARY KEY AUTOINCREMENT, title, description, image, link)";
	db.run(sqlProjects);
};

module.exports = initDB;
