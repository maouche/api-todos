const { Todo } = require("../model/Todo");
const { client } = require("../config/database");

const todos = (req, res) => {
    try {
        Todo.byUser(req.user.id, (todos) => {
            res.status(200).json(todos);
        });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

const addTodo = (req, res) => {
    try {
        Todo.create({ title: req.body.title, user_id: req.user.id }, (todo) => {
            res.status(200).json(todo);
        });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

const updateTodo = (req, res) => {
    try {
        // if user connect is user_id in todo
		client.get(
            "SELECT * FROM todos WHERE id=?",
            [req.body.id],
            (error, todo) => {
                if (error) throw error;
                if (todo && todo.id_user === req.user.id) {
					Todo.update({ id: req.body.id, title: req.body.title, completed: req.body.completed },
						(todo) => {
							res.status(200).json(todo);
						}
					);
				} else {
                    res.status(403).json({
                        message:
                            "You do not have permission to change this todo.",
                    });
				}
			}
		)
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

const deleteTodo = (req, res) => {
    try {
		client.get(
            "SELECT * FROM todos WHERE id=?",
            [req.body.id],
            (error, todo) => {
                if (error) throw error;
                if (todo && todo.id_user === req.user.id) {
					Todo.delete(req.body.id, () => {
						res.status(200).json(req.body.id);
					});
				} else {
                    res.status(403).json({ message: "You do not have permission to change this todo." });
				}
			}
		)
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

module.exports = { todos, addTodo, updateTodo, deleteTodo };
