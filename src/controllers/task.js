// eleminate cors

const TaskModel = require("../db/models/task.model");
let taskIdCounter = 1;

// For adding the task
exports.AddTask = async (req, res) => {
  console.log("hello AddUser", req.user);
  try {
    const { title, description, status, dueDate } = req.body;

    const addTask = await TaskModel.create({
      id: taskIdCounter++,
      title,
      description,
      status,
      dueDate,
      userId: req.user.userId,
    });

    res.status(201).json({
      status: true,
      message: "Task add Successfully",
      addTask,
    });
  } catch (err) {
    console.log("error At add Tasks: ", err);

    res.status(500).json({
      status: false,
      message: "Server Error!!",
    });
  }
};

// for getting all tasks of the user
exports.GetTasks = async (req, res) => {
  console.log("hello GetUser", req.user);
  try {
    // const { title, description, status, dueDate } = req.body;

    const GetAllTask = await TaskModel.find({ userId: req.user.userId });

    res.status(200).json({
      status: true,
      message: "Getting All Tasks",
      GetAllTask,
    });
  } catch (err) {
    console.log("error At add Tasks: ", err);

    res.status(500).json({
      status: false,
      message: "Server Error!!",
    });
  }
};
