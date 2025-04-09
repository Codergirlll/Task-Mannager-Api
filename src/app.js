const express = require("express");
const app = express();
require("dotenv").config();
const UserRouter = require("./routes/user.route");
const TaskRouter = require("./routes/task.route");

// for app requirement
app.use(express.json());

// for Importing Database
require("./db/connection");

// for Importing Routers
app.use("/api/v1", UserRouter);
app.use("/api/v1", TaskRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running at port no. ${port}`);
});
