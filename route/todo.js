const express = require("express");
const { todos, addTodo, updateTodo, completedTodo, deleteTodo } = require("../controller/todo");
const { authenticateToken } = require("../controller/auth");
const router = express.Router();

router.route("/todos").get(authenticateToken, todos);
router.route("/todos").post(authenticateToken, addTodo);
router.route("/todos").put(authenticateToken, updateTodo);
router.route("/completed").put(authenticateToken, completedTodo);
router.route("/todos").delete(authenticateToken, deleteTodo);

module.exports = router;