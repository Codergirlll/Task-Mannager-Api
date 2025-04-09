const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: String,
  status: {
    type: String,
    enum: ["pending", "in-progress", "completed"],
    default: "pending",
  },
  dueDate: {
    type: Date,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    // ref: "user",
    required: true,
  },
});

const TaskModel = mongoose.model("Task", TaskSchema);

module.exports = TaskModel;
