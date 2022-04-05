const { todosController } = require("../controller/todos.controller");
const { Router } = require("express");
const authMiddleware = require("../models/middlewares/auth.middleware");

const router = Router();

//router.get("/users", userController.getAllUsers);
router.post("/todos", authMiddleware, todosController.createTodo);
router.get("/todos", authMiddleware, todosController.getAllTodos);
router.delete("/todos/:id", todosController.deleteTodo);

module.exports = router;
