const { v4 } = require("uuid");
const { client } = require('../config/database');

class Todo {

	static create (data, cb) {
		let todo = {id: v4(), title: data.title, completed: false, created_at: new Date(), user_id: data.user_id};
		client.run(
			"INSERT INTO todos(id, title, completed, created_at, id_user) VALUES(?, ?, ?, ?, ?)", 
			[todo.id, todo.title, todo.completed, todo.created_at, todo.user_id], (error) => {
			if(error) throw error
			cb(todo);
		})
	}

	static update(data, cb) {
		let todo = { id: data.id, title: data.title, completed: data.completed };
		client.run("UPDATE todos SET title=?, completed=? WHERE id=?", [todo.title, todo.completed, todo.id], (error) => {
			if(error) throw error
			cb(todo);
		})
	}

	static delete(id, cb) {
		client.run("DELETE FROM todos WHERE id=?", [id], (error) => {
			if(error) throw error
			cb();
		})
	}

	static byUser(user_id, cb) {
		client.all("SELECT * FROM todos WHERE id_user=? ORDER BY created_at DESC", [user_id], (error, todos) => {
			if(error) throw error
			cb(todos);
		})
	} 
}

module.exports = { Todo };