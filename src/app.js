const express = require("express");
const app = express();
require("dotenv").config();
const UserRouter = require("./routes/user.route");
const TaskRouter = require("./routes/task.route");
const { ErrorHandling } = require("./middlewares/errorHandling");

// for app requirement
app.use(express.json());

// for Importing Database
require("./db/connection");

// for Importing Routers
app.use("/api/v1", UserRouter);
app.use("/api/v1", TaskRouter);


// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json(

// });

app.use(ErrorHandling);


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running at port no. ${port}`);
});
