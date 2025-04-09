const express = require("express");
const { Auth } = require("../middlewares/auth");
const { AddTask, GetTasks } = require("../controllers/task");

const TaskRouter = express.Router();

TaskRouter.post("/add/task", Auth, AddTask);
TaskRouter.get("/get/task", Auth, GetTasks);

module.exports = TaskRouter;
