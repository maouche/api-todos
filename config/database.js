const sqlite3 = require("sqlite3")

let client = new sqlite3.Database(process.env.DB_NAME, (error) => {
	if (error)
		throw error

	console.log("Database started on " + process.env.DB_NAME)
})

client.run(`CREATE TABLE IF NOT EXISTS todos (
  id varchar(50) NOT NULL,
  title varchar(250) NOT NULL,
  completed boolean DEFAULT false,
  created_at DATETIME,
  id_user varchar(50) NULL,
  PRIMARY KEY (id)
)`);

let closeDB = () => {
	client.close((error) => {
		if (error)
			throw error

		console.log("Database closed.")
	})
}

module.exports = { client, closeDB }