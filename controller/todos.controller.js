const Todo = require("../models/Todo.model");
const jwt = require("jsonwebtoken");

module.exports.todosController = {
  getAllTodos: async (req, res) => {
    const todos = await Todo.find();

    res.json(todos);
  },
  deleteTodo: async (req, res) => {
    const { id } = req.params;
    const { authorization } = req.headers;

    const [type, token] = authorization.split(" ");

    if (type !== "Bearer") {
      return res.status(400).json("error, ne verniy tip tokena");
    }
    try {
      const payload = await jwt.verify(token, process.env.SECRET_JWT_KEY);

      const todo = await Todo.findById(id);

      if (todo.user === payload.id) {
        await todo.remove();

        return res.json("удалено");
      }
      return res.status(401).json("ошика. Нет доступа");
    } catch (e) {
      return res.status(401).json("not verniy token");
    }

    res.json(todo);
  },

  createTodo: async (req, res) => {
    const { userId, text } = req.body;

    try {
      const todo = await Todo.create({
        user: req.user.id,
        text,
      });

      return res.json(todo);
    } catch (e) {
      return res.status(401).json("not verniy token");
    }
  },
};
