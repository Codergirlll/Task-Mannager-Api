const express = require("express");
const { Auth } = require("../middlewares/auth");
const { AddTask, GetTasks, UpdateTask, DeleteTask } = require("../controllers/task");

const TaskRouter = express.Router();

TaskRouter.post("/add/task", Auth, AddTask);
TaskRouter.get("/get/task", Auth, GetTasks);
TaskRouter.put("/update/task/:taskId", Auth, UpdateTask);
TaskRouter.delete("/delete/task/:taskId", Auth, DeleteTask);

module.exports = TaskRouter;
