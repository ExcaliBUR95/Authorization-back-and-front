const { userController } = require("../controller/user.controller");
const { Router } = require("express");

const router = Router();

router.get("/users", userController.getAllUsers);
router.post("/users", userController.registerUser);
router.post("/login", userController.login);

module.exports = router;
