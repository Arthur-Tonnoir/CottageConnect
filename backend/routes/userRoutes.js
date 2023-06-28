const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", userController.getAllUsers);
router.get("/user/:id", userController.getUserById);
router.post("/user", userController.createUser);
router.put("/user/:id", userController.updateUser);
router.delete("/user/:id", userController.deleteUser);
router.get("/logout", userController.logout);
router.post("/login", userController.login);

module.exports = router;
